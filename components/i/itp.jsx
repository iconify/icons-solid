import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-e92pebk.css';
import '../../css/b/behv4qxvs.css';
import '../../css/p/pu3w9bnvw.css';
import '../../css/m/mii0xabzm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-e92pebk"/><path class="behv4qxvs"/><path class="pu3w9bnvw"/><path class="mii0xabzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:itp"} {...others} />);
}

export default Component;
