import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cm376cbdv.css';
import '../../css/g/ghvhbzbbi.css';
import '../../css/s/skcn-cc0b.css';
import '../../css/f/ftash0ivf.css';
import '../../css/v/vojousb_p.css';
import '../../css/i/ia6wgitff.css';
import '../../css/b/bs0lycbuk.css';
import '../../css/x/xns-j0_or.css';
import '../../css/o/of4ljsshd.css';
import '../../css/c/cc3ktl8ve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cm376cbdv"/><path class="ghvhbzbbi"/><path class="skcn-cc0b"/><path class="ftash0ivf"/><path class="vojousb_p"/><path class="ia6wgitff"/><path class="bs0lycbuk"/><path class="xns-j0_or"/><path class="of4ljsshd"/><path class="cc3ktl8ve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mdx"} {...others} />);
}

export default Component;
