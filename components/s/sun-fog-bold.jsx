import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3_8fkw7e.css';
import '../../css/l/llrk-tbrn.css';
import '../../css/n/n6sk80bgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o3_8fkw7e"/><path class="llrk-tbrn"/><path clip-rule="evenodd" class="n6sk80bgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sun-fog-bold"} {...others} />);
}

export default Component;
