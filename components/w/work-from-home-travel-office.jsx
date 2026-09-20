import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtud3ynqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mtud3ynqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:work-from-home-travel-office"} {...others} />);
}

export default Component;
