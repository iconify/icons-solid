import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozskazbsp.css';
import '../../css/j/j4z5zmbnn.css';
import '../../css/d/ddvpwkbmt.css';
import '../../css/r/rkqbxubsf.css';
import '../../css/g/g51i94h2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ozskazbsp"/><path class="j4z5zmbnn"/><path class="ddvpwkbmt"/><path class="rkqbxubsf"/><path class="g51i94h2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:database-migration"} {...others} />);
}

export default Component;
