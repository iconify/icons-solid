import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxyw-3zpa.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="cxyw-3zpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:deployments"} {...others} />);
}

export default Component;
