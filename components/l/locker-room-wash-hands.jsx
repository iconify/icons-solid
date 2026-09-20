import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shm1c9ycf.css';
import '../../css/x/xbb9jmbyo.css';
import '../../css/d/d4ek7-b3f.css';
import '../../css/j/jehtlf2-u.css';
import '../../css/i/iai4bff8j.css';
import '../../css/v/vzoc528gi.css';
import '../../css/t/txc792bsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="shm1c9ycf"/><path class="xbb9jmbyo"/><path class="d4ek7-b3f"/><path class="jehtlf2-u"/><path class="iai4bff8j"/><path class="vzoc528gi"/><path class="txc792bsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:locker-room-wash-hands"} {...others} />);
}

export default Component;
