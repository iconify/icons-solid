import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/go60rxbzw.css';
import '../../css/t/t340dj2hn.css';
import '../../css/d/dm_vappwo.css';
import '../../css/j/jivaq7bou.css';
import '../../css/r/r45f9z7gf.css';
import '../../css/i/i4kxzkcvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="go60rxbzw"/><path class="t340dj2hn"/><path class="dm_vappwo"/><path class="jivaq7bou"/><path class="r45f9z7gf"/><path class="i4kxzkcvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:binary"} {...others} />);
}

export default Component;
