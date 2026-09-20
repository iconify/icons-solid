import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izs_rbb_s.css';
import '../../css/p/pt6hrq4xl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="izs_rbb_s"/><path class="pt6hrq4xl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:sail-ship-solid"} {...others} />);
}

export default Component;
