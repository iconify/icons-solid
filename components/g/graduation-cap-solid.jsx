import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgc7hzbms.css';
import '../../css/z/zv-_rfb2x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hgc7hzbms"/><path class="zv-_rfb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:graduation-cap-solid"} {...others} />);
}

export default Component;
