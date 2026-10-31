import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czkks7lgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="czkks7lgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gift-stack-gloss"} {...others} />);
}

export default Component;
