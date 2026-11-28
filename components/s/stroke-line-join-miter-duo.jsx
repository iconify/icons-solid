import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je1_p6b6p.css';
import '../../css/i/irsgehcir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="je1_p6b6p secondary"/><path class="irsgehcir primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:stroke-line-join-miter-duo"} {...others} />);
}

export default Component;
