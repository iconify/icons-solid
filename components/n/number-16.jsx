import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na-pm8via.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="na-pm8via"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:number-16"} {...others} />);
}

export default Component;
