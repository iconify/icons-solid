import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj8ildbvh.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tj8ildbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:dyalog-wordmark"} {...others} />);
}

export default Component;
