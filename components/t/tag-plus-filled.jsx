import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng18x5bhl.css';
import '../../css/b/bdg69fb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ng18x5bhl"/><path class="bdg69fb8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tag-plus-filled"} {...others} />);
}

export default Component;
