import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qlfbajb5y.css';
import '../../css/g/gw9fwq17f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qlfbajb5y"/><path class="gw9fwq17f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pin-2-alt"} {...others} />);
}

export default Component;
