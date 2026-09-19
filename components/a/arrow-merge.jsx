import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg-sl6llt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mg-sl6llt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:arrow-merge"} {...others} />);
}

export default Component;
