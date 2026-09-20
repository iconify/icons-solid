import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jik94npjl.css';
import '../../css/u/uhnpryepr.css';
import '../../css/b/by-_qrbmx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jik94npjl"/><path class="uhnpryepr"/><path class="by-_qrbmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:zkb"} {...others} />);
}

export default Component;
