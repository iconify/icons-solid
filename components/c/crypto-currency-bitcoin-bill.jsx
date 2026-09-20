import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jx0_4-bhs.css';
import '../../css/n/nzvxq-brw.css';
import '../../css/x/xfd4k8urc.css';
import '../../css/n/nd0i9oisd.css';
import '../../css/z/zfa9sw5gt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jx0_4-bhs"/><path class="nzvxq-brw"/><path class="xfd4k8urc"/><path class="nd0i9oisd"/><path class="zfa9sw5gt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:crypto-currency-bitcoin-bill"} {...others} />);
}

export default Component;
