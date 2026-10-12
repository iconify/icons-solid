import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onjqb9blp.css';
import '../../css/g/g3refjfpl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="onjqb9blp"/><path class="g3refjfpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-git-2-filled"} {...others} />);
}

export default Component;
