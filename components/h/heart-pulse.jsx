import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b38sfdbfi.css';
import '../../css/a/a6bur7awm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b38sfdbfi wm-k"/><path class="a6bur7awm wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:heart-pulse"} {...others} />);
}

export default Component;
