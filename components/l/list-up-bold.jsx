import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmkb8jbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jmkb8jbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-up-bold"} {...others} />);
}

export default Component;
