import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npb90acjk.css';
import '../../css/j/jy2_mcanx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="npb90acjk"/><path class="jy2_mcanx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:search-light"} {...others} />);
}

export default Component;
