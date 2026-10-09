import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqbx70bbt.css';
import '../../css/w/wvdczzbrq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nqbx70bbt"/><path class="wvdczzbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:picnic-48"} {...others} />);
}

export default Component;
