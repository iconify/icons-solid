import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy08vwban.css';
import '../../css/h/hx5mj141a.css';
import '../../css/q/qxcq365rf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oy08vwban"/><path class="hx5mj141a"/><path class="qxcq365rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:search-box-solid"} {...others} />);
}

export default Component;
