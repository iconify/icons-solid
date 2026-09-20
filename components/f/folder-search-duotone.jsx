import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/mq2ccos5s.css';
import '../../css/w/wh25rpwfz.css';
import '../../css/u/us0mlcc8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="mq2ccos5s"/><path clip-rule="evenodd" class="wh25rpwfz"/></g><path clip-rule="evenodd" class="us0mlcc8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-search-duotone"} {...others} />);
}

export default Component;
