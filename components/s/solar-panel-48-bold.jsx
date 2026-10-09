import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v21_iw5xw.css';
import '../../css/u/ul5y7nsoe.css';
import '../../css/v/vb74a5b1y.css';
import '../../css/i/i73i1vb5u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v21_iw5xw"/><path class="ul5y7nsoe"/><path class="vb74a5b1y"/><path class="i73i1vb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-48-bold"} {...others} />);
}

export default Component;
