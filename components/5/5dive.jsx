import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt7xtbczv.css';
import '../../css/f/fqgt3213z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bt7xtbczv"/><path class="fqgt3213z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:5dive"} {...others} />);
}

export default Component;
