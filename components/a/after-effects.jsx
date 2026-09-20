import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktonl8bjx.css';
import '../../css/h/h8ocnybfe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ktonl8bjx"/><path class="h8ocnybfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:after-effects"} {...others} />);
}

export default Component;
