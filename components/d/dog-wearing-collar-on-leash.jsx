import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7-32nbpu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q7-32nbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:dog-wearing-collar-on-leash"} {...others} />);
}

export default Component;
