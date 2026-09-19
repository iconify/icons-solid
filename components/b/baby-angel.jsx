import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8yznqbtg.css';
import '../../css/v/vmkov9bns.css';
import '../../css/i/iadf3bcxd.css';
import '../../css/v/vl37ef5-n.css';
import '../../css/v/vczopir0w.css';
import '../../css/y/ywv-l-b0s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o8yznqbtg"/><path clip-rule="evenodd" class="vmkov9bns"/><path class="iadf3bcxd"/><path clip-rule="evenodd" class="vl37ef5-n"/><path class="vczopir0w"/><path class="ywv-l-b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:baby-angel"} {...others} />);
}

export default Component;
