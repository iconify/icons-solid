import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oopsgunny.css';
import '../../css/e/eq6f2obhm.css';
import '../../css/u/uxyj568bx.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="oopsgunny"/><path class="eq6f2obhm"/><path class="uxyj568bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:logstash"} {...others} />);
}

export default Component;
