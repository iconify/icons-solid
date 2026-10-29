import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml08hox5q.css';
import '../../css/t/tne5oowir.css';
import '../../css/z/zed7i37pe.css';
import '../../css/r/r8wqxntin.css';
import '../../css/h/h_ki4obna.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ml08hox5q wm-shadow"/><path class="tne5oowir wm-k"/><path class="wm-k zed7i37pe"/><path class="r8wqxntin wm-a"/><path class="h_ki4obna wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:underline"} {...others} />);
}

export default Component;
