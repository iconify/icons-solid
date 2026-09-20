import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbtv_rbic.css';
import '../../css/e/ea8if3c8i.css';
import '../../css/m/mgzrqm6_d.css';
import '../../css/k/kat0eym1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbtv_rbic"/><path class="ea8if3c8i"/><path class="mgzrqm6_d"/><path class="kat0eym1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:ruler-combined"} {...others} />);
}

export default Component;
