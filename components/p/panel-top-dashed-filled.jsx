import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6wtvyb2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d6wtvyb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:panel-top-dashed-filled"} {...others} />);
}

export default Component;
