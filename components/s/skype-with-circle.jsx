import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4cqdcc1t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e4cqdcc1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo-social:skype-with-circle"} {...others} />);
}

export default Component;
