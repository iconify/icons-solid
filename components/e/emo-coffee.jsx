import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni-w6_bxa.css';

const viewBox = {"width":1673,"height":1000};
const content = `<path class="ni-w6_bxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontelico:emo-coffee"} {...others} />);
}

export default Component;
