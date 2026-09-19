import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkqfu6xlm.css';
import '../../css/a/aj0w9bczw.css';
import '../../css/a/a3knxfs8y.css';
import '../../css/l/lrhr33_ae.css';
import '../../css/v/vy94sotnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wkqfu6xlm"/><path class="aj0w9bczw"/><path class="a3knxfs8y"/><path class="lrhr33_ae"/><path class="vy94sotnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-natural-language-api"} {...others} />);
}

export default Component;
