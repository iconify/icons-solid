import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-mclwbrv.css';
import '../../css/v/ve76it-vi.css';
import '../../css/z/zranexbky.css';
import '../../css/d/dizveqbmt.css';
import '../../css/w/w65_f1b8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d-mclwbrv"/><path class="ve76it-vi"/><path class="zranexbky"/><path class="dizveqbmt"/><path class="w65_f1b8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:credit-card-payment-machine"} {...others} />);
}

export default Component;
