import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlmdbg7_y.css';
import '../../css/a/alofci_ew.css';
import '../../css/v/vbwj7mb1v.css';
import '../../css/h/hix411l_q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xlmdbg7_y"/><path class="alofci_ew"/><path class="vbwj7mb1v"/><path class="hix411l_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-quill-ink"} {...others} />);
}

export default Component;
