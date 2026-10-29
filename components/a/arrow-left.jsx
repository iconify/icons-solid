import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aexwcm9er.css';
import '../../css/c/ccdp7c34j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aexwcm9er wm-k"/><path class="ccdp7c34j wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:arrow-left"} {...others} />);
}

export default Component;
