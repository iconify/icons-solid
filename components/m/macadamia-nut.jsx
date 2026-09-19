import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_xj2ldud.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y_xj2ldud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:macadamia-nut"} {...others} />);
}

export default Component;
