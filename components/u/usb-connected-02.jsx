import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yfmftrtcq.css';
import '../../css/s/s3sauobxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yfmftrtcq"/><path class="s3sauobxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:usb-connected-02"} {...others} />);
}

export default Component;
