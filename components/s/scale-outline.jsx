import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn-0ytboo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gn-0ytboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scale-outline"} {...others} />);
}

export default Component;
