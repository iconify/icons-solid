import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6i__zbof.css';
import '../../css/t/th5wqpzfa.css';
import '../../css/q/qfnkoxw6w.css';
import '../../css/i/i6jalmb5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z6i__zbof"/><path clip-rule="evenodd" class="th5wqpzfa"/><path clip-rule="evenodd" class="qfnkoxw6w"/><path class="i6jalmb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:desktop-check-duotone"} {...others} />);
}

export default Component;
