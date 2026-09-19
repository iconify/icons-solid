import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo3soyo3f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eo3soyo3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-follow-stroke-16"} {...others} />);
}

export default Component;
