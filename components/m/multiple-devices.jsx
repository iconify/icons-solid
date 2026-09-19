import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flpnt7but.css';
import '../../css/o/obq63ibrp.css';
import '../../css/o/omy4cqb5m.css';
import '../../css/k/kd86ekb0e.css';
import '../../css/k/kuz2hrb7p.css';
import '../../css/z/zbfmn9k_i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="flpnt7but"/><path class="obq63ibrp"/><path class="omy4cqb5m"/><path class="kd86ekb0e"/><path class="kuz2hrb7p"/><circle class="zbfmn9k_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:multiple-devices"} {...others} />);
}

export default Component;
