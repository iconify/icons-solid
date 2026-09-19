import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wi5iwqbby.css';
import '../../css/q/qqdx66bkk.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="wi5iwqbby"/><path class="qqdx66bkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:vagrant-wordmark"} {...others} />);
}

export default Component;
