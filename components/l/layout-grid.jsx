import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-877v1pe.css';
import '../../css/e/e-_uqrb9d.css';
import '../../css/i/ijz6zybvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-877v1pe"/><path class="e-_uqrb9d"/><path class="ijz6zybvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:layout-grid"} {...others} />);
}

export default Component;
