import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r02e4qbct.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r02e4qbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:slider-v"} {...others} />);
}

export default Component;
