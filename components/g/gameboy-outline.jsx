import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbzto1kyu.css';
import '../../css/x/xi_mxdbjk.css';
import '../../css/q/qsvzrh2pz.css';
import '../../css/i/itkht4b8h.css';
import '../../css/p/pf7v6zb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tbzto1kyu"/><path class="xi_mxdbjk"/><path class="qsvzrh2pz"/><path class="itkht4b8h"/><path class="pf7v6zb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gameboy-outline"} {...others} />);
}

export default Component;
