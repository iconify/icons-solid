import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iiijosb5q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="iiijosb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-speaking-to-amphitheater"} {...others} />);
}

export default Component;
