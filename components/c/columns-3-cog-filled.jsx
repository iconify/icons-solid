import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whvybwb6j.css';
import '../../css/d/d0psnynrw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="whvybwb6j"/><path class="d0psnynrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:columns-3-cog-filled"} {...others} />);
}

export default Component;
