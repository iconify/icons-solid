import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh21c1arq.css';
import '../../css/g/gin_3l1fi.css';
import '../../css/y/yzfdw0bro.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zh21c1arq"/><path class="gin_3l1fi"/><path class="yzfdw0bro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:virtual-column"} {...others} />);
}

export default Component;
