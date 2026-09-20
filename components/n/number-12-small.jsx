import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkx42b5na.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wkx42b5na"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:number-12-small"} {...others} />);
}

export default Component;
