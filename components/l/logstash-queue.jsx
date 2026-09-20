import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ueqpadbfk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ueqpadbfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:logstash-queue"} {...others} />);
}

export default Component;
