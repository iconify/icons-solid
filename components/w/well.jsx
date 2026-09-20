import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw5-8bntt.css';
import '../../css/h/hzh-nhhxi.css';
import '../../css/n/nab94-b5r.css';
import '../../css/s/szdw0lbyi.css';
import '../../css/q/qfvdoibad.css';
import '../../css/g/g2hys0b1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tw5-8bntt"/><path class="hzh-nhhxi"/><path class="nab94-b5r"/><path class="szdw0lbyi"/><path class="qfvdoibad"/><path class="g2hys0b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:well"} {...others} />);
}

export default Component;
