import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj6r4aboh.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="oj6r4aboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:pubpeer-square"} {...others} />);
}

export default Component;
