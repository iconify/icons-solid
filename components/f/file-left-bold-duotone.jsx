import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgd8bzbml.css';
import '../../css/q/qfm_mp96p.css';
import '../../css/c/cm457dbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kgd8bzbml"/><path class="qfm_mp96p"/><path class="cm457dbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-left-bold-duotone"} {...others} />);
}

export default Component;
