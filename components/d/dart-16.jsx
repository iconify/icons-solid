import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7z2-nmdg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w7z2-nmdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:dart-16"} {...others} />);
}

export default Component;
