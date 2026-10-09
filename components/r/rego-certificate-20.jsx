import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xiwpj83ce.css';
import '../../css/x/x3pmlnn9y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xiwpj83ce"/><path class="x3pmlnn9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rego-certificate-20"} {...others} />);
}

export default Component;
