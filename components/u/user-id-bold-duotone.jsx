import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nphcgbcmt.css';
import '../../css/k/k9no-9t3l.css';
import '../../css/f/fmbn5ubnp.css';
import '../../css/i/io-bp4hes.css';
import '../../css/r/rp2xrbvey.css';
import '../../css/x/xlf8yxbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nphcgbcmt"/><path class="k9no-9t3l"/><path class="fmbn5ubnp"/><path class="io-bp4hes"/><path class="rp2xrbvey"/><path class="xlf8yxbsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-id-bold-duotone"} {...others} />);
}

export default Component;
