import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozaoy9b0z.css';
import '../../css/x/xqo9p-xfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ozaoy9b0z"/><path class="xqo9p-xfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-hand-up-bold"} {...others} />);
}

export default Component;
