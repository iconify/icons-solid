import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx3j4ua7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bx3j4ua7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:vitepress"} {...others} />);
}

export default Component;
