import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hji4_vdzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hji4_vdzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:toggle-left-fill"} {...others} />);
}

export default Component;
