import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-2d2jb1r.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="l-2d2jb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:safe-vault-remix"} {...others} />);
}

export default Component;
