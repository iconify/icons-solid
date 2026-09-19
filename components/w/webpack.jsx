import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn_i5xb7j.css';
import '../../css/t/tgvy-8bim.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bn_i5xb7j"/><path class="tgvy-8bim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:webpack"} {...others} />);
}

export default Component;
