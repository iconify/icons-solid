import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjxa9--aw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjxa9--aw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tree-pine-gloss"} {...others} />);
}

export default Component;
