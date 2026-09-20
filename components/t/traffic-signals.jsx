import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9lkkjbrw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q9lkkjbrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:traffic-signals"} {...others} />);
}

export default Component;
