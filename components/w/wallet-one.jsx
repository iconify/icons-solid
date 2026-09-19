import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvhpxbc1d.css';
import '../../css/k/k0soy3mpv.css';
import '../../css/u/ua7h0o40v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="xvhpxbc1d"/><path class="k0soy3mpv"/><circle class="ua7h0o40v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:wallet-one"} {...others} />);
}

export default Component;
