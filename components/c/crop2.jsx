import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r29ui0i8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r29ui0i8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:crop2"} {...others} />);
}

export default Component;
