import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adkx26buk.css';
import '../../css/e/ex3oebbia.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="adkx26buk"/><path class="ex3oebbia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hard-drive-filled"} {...others} />);
}

export default Component;
