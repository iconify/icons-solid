import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tuzx40mug.css';
import '../../css/w/wkccvue1w.css';
import '../../css/y/yur3l-b2x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tuzx40mug"/><path class="wkccvue1w"/><path class="yur3l-b2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:apache-tomcat"} {...others} />);
}

export default Component;
