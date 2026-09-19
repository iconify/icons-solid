import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a27p9svzp.css';
import '../../css/u/u-dqumrtl.css';
import '../../css/k/kzia-bcxb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a27p9svzp"/><path class="u-dqumrtl"/><path class="kzia-bcxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:study-read"} {...others} />);
}

export default Component;
