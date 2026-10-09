import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b98g_82cf.css';
import '../../css/w/wg1zusbqd.css';
import '../../css/h/hko9syb3s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b98g_82cf"/><path class="wg1zusbqd"/><path class="hko9syb3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biogas-digester-20-bold"} {...others} />);
}

export default Component;
