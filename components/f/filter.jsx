import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9ytm8b_p.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="o9ytm8b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:filter"} {...others} />);
}

export default Component;
