import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9hw04gtb.css';
import '../../css/j/j5ncyysyc.css';
import '../../css/e/ea3jqeb9u.css';
import '../../css/a/adtv22bjo.css';
import '../../css/h/h1cex349q.css';
import '../../css/l/l5xqjwbxk.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="z9hw04gtb"/><path class="j5ncyysyc"/><path class="ea3jqeb9u"/><path class="adtv22bjo"/><path class="h1cex349q"/><path class="l5xqjwbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:brunei"} {...others} />);
}

export default Component;
