import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0wz0cc8p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k0wz0cc8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:airplane-enabled"} {...others} />);
}

export default Component;
