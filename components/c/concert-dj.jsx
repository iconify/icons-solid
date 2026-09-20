import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rwelgybmu.css';
import '../../css/v/v-i0on6ks.css';
import '../../css/a/ac61dbckf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rwelgybmu"/><path class="v-i0on6ks"/><path class="ac61dbckf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:concert-dj"} {...others} />);
}

export default Component;
