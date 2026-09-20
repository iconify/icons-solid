import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufq81rb0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ufq81rb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifer-zoom-out-outline"} {...others} />);
}

export default Component;
