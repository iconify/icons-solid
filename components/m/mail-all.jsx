import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzw5cbb6b.css';
import '../../css/o/o90l0ebko.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zzw5cbb6b"/><path class="o90l0ebko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:mail-all"} {...others} />);
}

export default Component;
