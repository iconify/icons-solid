import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ks1ait7gr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ks1ait7gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:align-center-justify"} {...others} />);
}

export default Component;
