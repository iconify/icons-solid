import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/equdfwqlp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="equdfwqlp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:data-solid"} {...others} />);
}

export default Component;
