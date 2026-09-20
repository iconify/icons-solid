import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjef-pb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vjef-pb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:aspect-ratio-square-filled"} {...others} />);
}

export default Component;
