import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrywqg59y.css';
import '../../css/d/da5zu8z9m.css';
import '../../css/k/k_haes9zn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jrywqg59y"/><path clip-rule="evenodd" class="da5zu8z9m"/><path clip-rule="evenodd" class="k_haes9zn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:high-definition-outline"} {...others} />);
}

export default Component;
