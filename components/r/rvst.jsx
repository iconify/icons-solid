import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9nycrbpr.css';
import '../../css/e/e0maw8b-r.css';
import '../../css/h/hjnsd4bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q9nycrbpr"/><path class="e0maw8b-r"/><path class="hjnsd4bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rvst"} {...others} />);
}

export default Component;
