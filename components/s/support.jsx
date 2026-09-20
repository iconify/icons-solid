import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/audo1xb5t.css';
import '../../css/v/vbbpf97ga.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="audo1xb5t"/><path class="vbbpf97ga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:support"} {...others} />);
}

export default Component;
