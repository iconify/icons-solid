import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_na6f67p.css';
import '../../css/b/ba7omlb3c.css';
import '../../css/a/apo2ptbjb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d_na6f67p"/><path class="ba7omlb3c"/><path class="apo2ptbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-20"} {...others} />);
}

export default Component;
