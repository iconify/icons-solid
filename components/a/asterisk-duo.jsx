import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j5qqge4bo.css';
import '../../css/u/uppxbxbjq.css';
import '../../css/x/xeziup3uu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j5qqge4bo"/><path class="uppxbxbjq"/><path class="xeziup3uu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:asterisk-duo"} {...others} />);
}

export default Component;
