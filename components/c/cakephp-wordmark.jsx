import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwd-a5bvw.css';
import '../../css/d/dz-ia743r.css';
import '../../css/q/qd99e1bmu.css';
import '../../css/t/tri7xd97g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="cwd-a5bvw"/><path class="dz-ia743r"/><path class="qd99e1bmu"/><path class="tri7xd97g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:cakephp-wordmark"} {...others} />);
}

export default Component;
