import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rekkswb7u.css';
import '../../css/f/f1fwzpb3n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rekkswb7u"/><path class="f1fwzpb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:credit-card-20"} {...others} />);
}

export default Component;
