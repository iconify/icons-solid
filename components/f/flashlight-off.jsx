import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctiym5e7j.css';

const viewBox = {"width":24,"height":24,"left":-0.5,"top":-0.5};
const content = `<path class="ctiym5e7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:flashlight-off"} {...others} />);
}

export default Component;
