import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aswzxcjfa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aswzxcjfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:welcome-add-page"} {...others} />);
}

export default Component;
