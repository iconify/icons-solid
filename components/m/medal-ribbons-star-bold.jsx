import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lij9yb37t.css';
import '../../css/d/dq8mdnoxf.css';
import '../../css/x/xrzk5dbef.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lij9yb37t"/><path class="dq8mdnoxf"/><path clip-rule="evenodd" class="xrzk5dbef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbons-star-bold"} {...others} />);
}

export default Component;
