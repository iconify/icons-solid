import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8fzx0j8i.css';

const viewBox = {"width":10,"height":16};
const content = `<path class="k8fzx0j8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:horizontal-rule"} {...others} />);
}

export default Component;
