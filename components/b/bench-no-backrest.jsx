import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn2rj9k1n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hn2rj9k1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:bench-no-backrest"} {...others} />);
}

export default Component;
