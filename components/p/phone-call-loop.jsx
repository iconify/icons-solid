import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/u/uudn8a.css';
import '../../css/g/g9kl8y.css';
import '../../css/p/pprfug.css';
import '../../css/s/so-from-62.css';
import '../../css/t/tr-b5mmly.css';
import '../../css/s/so-ohjegy.css';
import '../../css/s/so-88gdib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c uudn8a"/><path class="a0m25c g9kl8y"/><path class="a0m25c pprfug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:phone-call-loop"} {...others} />);
}

export default Component;
