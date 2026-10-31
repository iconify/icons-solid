import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/r/ru_s8-b7j.css';
import '../../css/e/ex6us3x3w.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="ru_s8-b7j"/><path class="ex6us3x3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:uruguay"} {...others} />);
}

export default Component;
