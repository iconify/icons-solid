import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3_8fkw7e.css';
import '../../css/n/n6sk80bgi.css';
import '../../css/i/iy4ux6kpz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o3_8fkw7e"/><path clip-rule="evenodd" class="n6sk80bgi"/><path class="iy4ux6kpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sunrise-bold"} {...others} />);
}

export default Component;
