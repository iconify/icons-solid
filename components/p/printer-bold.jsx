import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo34r_bxy.css';
import '../../css/r/rsxgxvbwd.css';
import '../../css/v/vpom7jbce.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mo34r_bxy"/><path class="rsxgxvbwd"/><path clip-rule="evenodd" class="vpom7jbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-bold"} {...others} />);
}

export default Component;
