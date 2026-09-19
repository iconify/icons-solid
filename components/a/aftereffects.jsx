import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe2kkz7uf.css';
import '../../css/d/dbikkebwp.css';
import '../../css/m/ms5yux87p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qe2kkz7uf"/><path class="dbikkebwp"/><path class="ms5yux87p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:aftereffects"} {...others} />);
}

export default Component;
