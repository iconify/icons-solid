import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm6olf9fp.css';
import '../../css/h/hr6xjbb6q.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="zm6olf9fp"/><path class="hr6xjbb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:play-video"} {...others} />);
}

export default Component;
