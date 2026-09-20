import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi8f3ubar.css';
import '../../css/u/u69h-uyii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zi8f3ubar"/><path class="u69h-uyii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:github-2"} {...others} />);
}

export default Component;
