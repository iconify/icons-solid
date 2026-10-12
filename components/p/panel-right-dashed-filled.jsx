import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jys00cbqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jys00cbqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:panel-right-dashed-filled"} {...others} />);
}

export default Component;
