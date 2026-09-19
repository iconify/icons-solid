import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pglrz1amb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pglrz1amb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:arrow-turn-down-left"} {...others} />);
}

export default Component;
