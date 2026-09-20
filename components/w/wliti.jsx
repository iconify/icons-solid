import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee8z-20zw.css';
import '../../css/m/m-327hb7l.css';
import '../../css/q/qpyv20i8g.css';
import '../../css/l/ljqckqbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ee8z-20zw"/><path class="m-327hb7l"/><path class="qpyv20i8g"/><path class="ljqckqbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wliti"} {...others} />);
}

export default Component;
