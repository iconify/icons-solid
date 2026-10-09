import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1wr267gl.css';
import '../../css/z/zq8n3hqfe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m1wr267gl"/><path class="zq8n3hqfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tent-48-bold"} {...others} />);
}

export default Component;
