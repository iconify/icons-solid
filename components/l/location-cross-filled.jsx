import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxqi0yxyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxqi0yxyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:location-cross-filled"} {...others} />);
}

export default Component;
