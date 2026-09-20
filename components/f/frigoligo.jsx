import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2pcngbug.css';
import '../../css/g/gehqwbjeu.css';
import '../../css/y/yerwukb9m.css';
import '../../css/x/xyxj75bbe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t2pcngbug"/><path class="gehqwbjeu"/><path class="yerwukb9m"/><path class="xyxj75bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frigoligo"} {...others} />);
}

export default Component;
