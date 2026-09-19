import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzwc1y54b.css';
import '../../css/r/ra66rbckd.css';
import '../../css/z/zgszk2b4j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bzwc1y54b"/><path class="ra66rbckd"/><path class="zgszk2b4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:play-outline-filled"} {...others} />);
}

export default Component;
