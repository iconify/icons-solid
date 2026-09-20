import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2euobcyk.css';
import '../../css/r/r78fl8b_u.css';
import '../../css/m/mbmho7ddy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g2euobcyk"/><path class="r78fl8b_u"/><path clip-rule="evenodd" class="mbmho7ddy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:timing-shelf-down-filled"} {...others} />);
}

export default Component;
