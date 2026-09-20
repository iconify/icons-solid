import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfcz1lb7w.css';
import '../../css/t/tigdgqbwo.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="qfcz1lb7w"/><path class="tigdgqbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:travel"} {...others} />);
}

export default Component;
