import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq5w33b7p.css';
import '../../css/c/cjpxibctb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gq5w33b7p wm-k"/><path class="cjpxibctb wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:skip-forward"} {...others} />);
}

export default Component;
