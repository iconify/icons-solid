import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/od5ws9p1u.css';
import '../../css/z/zks01mb9q.css';
import '../../css/i/isdwbyblh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="od5ws9p1u"/><path clip-rule="evenodd" class="zks01mb9q"/><path class="isdwbyblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:blogger-logo"} {...others} />);
}

export default Component;
