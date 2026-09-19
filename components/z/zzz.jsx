import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls2mw5bpz.css';
import '../../css/n/ng-0l2b0x.css';
import '../../css/p/pnmqy4tny.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ls2mw5bpz"/><path class="ng-0l2b0x"/><path class="pnmqy4tny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:zzz"} {...others} />);
}

export default Component;
