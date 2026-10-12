import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti93n7b7m.css';
import '../../css/u/u2_dmwbyp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ti93n7b7m"/><path class="u2_dmwbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mouse-right-filled"} {...others} />);
}

export default Component;
