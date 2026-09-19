import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk074xkan.css';
import '../../css/z/zjr6jubdu.css';
import '../../css/g/g_412ygpx.css';
import '../../css/l/l1zmjqb9d.css';
import '../../css/m/mlhzcfy5k.css';

const viewBox = {"width":100,"height":69};
const content = `<path class="rk074xkan"/><path class="zjr6jubdu"/><path class="g_412ygpx"/><path class="l1zmjqb9d"/><path class="mlhzcfy5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:pc"} {...others} />);
}

export default Component;
