import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfguy432a.css';
import '../../css/n/nhu-fkbvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wfguy432a"/><path class="nhu-fkbvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:flip-to-front-filled"} {...others} />);
}

export default Component;
