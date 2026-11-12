import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvyedwt0y.css';
import '../../css/f/fep52olyi.css';
import '../../css/e/ezl-f-c_l.css';
import '../../css/l/l8ejz0bie.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nvyedwt0y"/><path class="fep52olyi"/><path class="ezl-f-c_l"/><path class="l8ejz0bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:labelito-light"} {...others} />);
}

export default Component;
