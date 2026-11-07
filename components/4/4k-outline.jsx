import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_as461dm.css';
import '../../css/m/mi_d81xnw.css';
import '../../css/k/k_haes9zn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b_as461dm"/><path class="mi_d81xnw"/><path clip-rule="evenodd" class="k_haes9zn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:4k-outline"} {...others} />);
}

export default Component;
