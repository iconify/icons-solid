import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/ph9zb5ezv.css';
import '../../css/d/dzmfdo8-t.css';
import '../../css/r/r3p0fh-uc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ph9zb5ezv"/><path class="dzmfdo8-t"/><path class="r3p0fh-uc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:laurel-wreath-right-02"} {...others} />);
}

export default Component;
