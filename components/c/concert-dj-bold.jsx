import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slk00objf.css';
import '../../css/w/wbyo_ts-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="slk00objf"/><path class="wbyo_ts-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:concert-dj-bold"} {...others} />);
}

export default Component;
