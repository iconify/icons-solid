import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbq8g6v3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gbq8g6v3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-i-diamond-solid"} {...others} />);
}

export default Component;
