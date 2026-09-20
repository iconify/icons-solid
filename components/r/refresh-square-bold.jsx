import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cih8fbbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cih8fbbtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-square-bold"} {...others} />);
}

export default Component;
