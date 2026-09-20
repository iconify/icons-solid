import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl9xknbcd.css';
import '../../css/e/euugn8avj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wl9xknbcd"/><path clip-rule="evenodd" class="euugn8avj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:magic-hat-fill"} {...others} />);
}

export default Component;
