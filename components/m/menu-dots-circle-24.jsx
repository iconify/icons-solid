import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf3hkbb1h.css';
import '../../css/u/u8acicc4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jf3hkbb1h"/><path clip-rule="evenodd" class="u8acicc4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:menu-dots-circle-24"} {...others} />);
}

export default Component;
