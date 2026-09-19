import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt-cjh-ks.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mt-cjh-ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:right-panel-show"} {...others} />);
}

export default Component;
