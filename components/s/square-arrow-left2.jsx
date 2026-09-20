import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mguys6byt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mguys6byt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:square-arrow-left2"} {...others} />);
}

export default Component;
