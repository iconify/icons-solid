import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul-tvzctf.css';
import '../../css/q/q7gioobwc.css';
import '../../css/z/zo7fnxb0h.css';
import '../../css/x/xj6xw5bhu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ul-tvzctf"/><path class="q7gioobwc"/><path class="zo7fnxb0h"/><path class="xj6xw5bhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:common-file-text-clock-bold"} {...others} />);
}

export default Component;
