import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ye20y-oru.css';
import '../../css/m/mnqs348qp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ye20y-oru"/><path class="mnqs348qp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-mass-data-migration"} {...others} />);
}

export default Component;
