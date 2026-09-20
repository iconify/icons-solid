import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enjjb4y7l.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="enjjb4y7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:city-gate"} {...others} />);
}

export default Component;
