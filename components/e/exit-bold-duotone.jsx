import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyvqlqxww.css';
import '../../css/a/axuu9gdaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cyvqlqxww"/><path clip-rule="evenodd" class="axuu9gdaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:exit-bold-duotone"} {...others} />);
}

export default Component;
