import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3n4852oq.css';
import '../../css/o/onfml7bjf.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="k3n4852oq"/><path class="onfml7bjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:volume"} {...others} />);
}

export default Component;
