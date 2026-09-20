import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh5xogo6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mh5xogo6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-down-square-filled"} {...others} />);
}

export default Component;
