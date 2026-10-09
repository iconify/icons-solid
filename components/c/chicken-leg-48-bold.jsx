import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjudu5_8t.css';
import '../../css/a/a5e9wp-or.css';
import '../../css/h/h7f8bvbnv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zjudu5_8t"/><path class="a5e9wp-or"/><path class="h7f8bvbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chicken-leg-48-bold"} {...others} />);
}

export default Component;
