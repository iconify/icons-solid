import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/som5wvb2y.css';
import '../../css/q/qj2dxhekm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="som5wvb2y"/><path class="qj2dxhekm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:contact2"} {...others} />);
}

export default Component;
