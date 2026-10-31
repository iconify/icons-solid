import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-ao8x7sy.css';
import '../../css/r/r9m45djyc.css';
import '../../css/t/tlm5y69ci.css';
import '../../css/s/sc_6ohbrm.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="v-ao8x7sy"/><path class="r9m45djyc"/><path class="tlm5y69ci"/><path class="sc_6ohbrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:chile"} {...others} />);
}

export default Component;
