import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pffhewbcz.css';
import '../../css/b/bcag0_byz.css';
import '../../css/m/m3mc73wcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pffhewbcz"/><path class="bcag0_byz"/><path class="m3mc73wcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:chart-pie"} {...others} />);
}

export default Component;
