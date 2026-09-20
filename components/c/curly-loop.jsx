import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfukdybcj.css';
import '../../css/e/e-3mmc50d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zfukdybcj"/><path class="e-3mmc50d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:curly-loop"} {...others} />);
}

export default Component;
