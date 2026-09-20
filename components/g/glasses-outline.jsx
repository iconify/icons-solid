import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/treqscctw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="treqscctw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:glasses-outline"} {...others} />);
}

export default Component;
