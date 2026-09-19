import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byxxf7blc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="byxxf7blc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:tag"} {...others} />);
}

export default Component;
