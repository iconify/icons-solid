import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z792yubyf.css';
import '../../css/g/gpbvbidrc.css';
import '../../css/j/jjet8kudg.css';

const viewBox = {"width":256,"height":221};
const content = `<path class="z792yubyf"/><path class="gpbvbidrc"/><path class="jjet8kudg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:vue"} {...others} />);
}

export default Component;
