import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irmk_pbcb.css';
import '../../css/z/zpt2lgb4a.css';
import '../../css/r/rpp_nsbbd.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="irmk_pbcb"/><path class="zpt2lgb4a"/><path class="rpp_nsbbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:prisma"} {...others} />);
}

export default Component;
