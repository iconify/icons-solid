import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x4rmk8quk.css';
import '../../css/z/z0-86vbfi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="x4rmk8quk"/><path class="z0-86vbfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bachelor-cap-two"} {...others} />);
}

export default Component;
