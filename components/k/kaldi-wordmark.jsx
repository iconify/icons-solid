import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjrh6jb6e.css';
import '../../css/q/qpqtl2biq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jjrh6jb6e"/><path class="qpqtl2biq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:kaldi-wordmark"} {...others} />);
}

export default Component;
