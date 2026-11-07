import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umzedbqyk.css';
import '../../css/d/d0h3wsgcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="umzedbqyk"/><path class="d0h3wsgcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-horizontal-bold"} {...others} />);
}

export default Component;
