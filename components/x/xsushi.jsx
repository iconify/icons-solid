import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxdb5_76z.css';
import '../../css/m/mq0bfxeqb.css';
import '../../css/x/xz1g8wb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxdb5_76z"/><path clip-rule="evenodd" class="mq0bfxeqb"/><path class="xz1g8wb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xsushi"} {...others} />);
}

export default Component;
