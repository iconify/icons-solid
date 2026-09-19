import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo7k8ptgw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eo7k8ptgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:heart-half"} {...others} />);
}

export default Component;
