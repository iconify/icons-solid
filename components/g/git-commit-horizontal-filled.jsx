import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crlsv-b4n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crlsv-b4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-commit-horizontal-filled"} {...others} />);
}

export default Component;
