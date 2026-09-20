import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1m0fhbyy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m1m0fhbyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:align-txt-right-outline"} {...others} />);
}

export default Component;
