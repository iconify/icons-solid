import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu1_sz9lp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cu1_sz9lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:sphere"} {...others} />);
}

export default Component;
