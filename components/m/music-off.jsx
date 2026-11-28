import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zxmc7xb9t.css';
import '../../css/y/yi37gdbko.css';
import '../../css/s/sqy0bqbaa.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zxmc7xb9t"/><path class="yi37gdbko"/><path class="sqy0bqbaa"/><path class="qjzyurbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:music-off"} {...others} />);
}

export default Component;
