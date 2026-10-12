import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iem8b0w8t.css';
import '../../css/u/uj0j0q9an.css';
import '../../css/y/yy6ac35kt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iem8b0w8t"/><path clip-rule="evenodd" class="uj0j0q9an"/><path class="yy6ac35kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bandage-filled"} {...others} />);
}

export default Component;
