import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sujvg4r4g.css';
import '../../css/x/xijg6zb7n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sujvg4r4g"/><path class="xijg6zb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:package"} {...others} />);
}

export default Component;
