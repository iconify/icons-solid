import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r58y-acsy.css';
import '../../css/x/xqiik-79j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r58y-acsy"/><path class="xqiik-79j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rtm"} {...others} />);
}

export default Component;
