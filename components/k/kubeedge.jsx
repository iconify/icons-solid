import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egx_p66ba.css';
import '../../css/h/h8oeuuwmd.css';

const viewBox = {"width":367.64,"height":360.14,"left":-3.82,"top":-0.07};
const content = `<path class="egx_p66ba"/><path class="h8oeuuwmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:kubeedge"} {...others} />);
}

export default Component;
