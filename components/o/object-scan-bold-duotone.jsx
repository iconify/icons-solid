import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_30xc53y.css';
import '../../css/a/a2zaddc-d.css';
import '../../css/b/bid0ecc1g.css';
import '../../css/x/xefyw8bax.css';
import '../../css/c/cnsrnd-wz.css';
import '../../css/v/vm54w180n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x_30xc53y"/><path class="a2zaddc-d"/><path class="bid0ecc1g"/><path class="xefyw8bax"/><path class="cnsrnd-wz"/><path class="vm54w180n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:object-scan-bold-duotone"} {...others} />);
}

export default Component;
