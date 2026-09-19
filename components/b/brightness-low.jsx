import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed6yhd3rt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ed6yhd3rt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:brightness-low"} {...others} />);
}

export default Component;
