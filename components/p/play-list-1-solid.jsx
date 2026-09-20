import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guqljlbye.css';
import '../../css/d/d5zekqbpn.css';
import '../../css/d/dt5btu-ha.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="guqljlbye"/><path clip-rule="evenodd" class="d5zekqbpn"/><path class="dt5btu-ha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:play-list-1-solid"} {...others} />);
}

export default Component;
