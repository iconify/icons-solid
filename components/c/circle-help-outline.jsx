import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps9e_1buy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ps9e_1buy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:circle-help-outline"} {...others} />);
}

export default Component;
