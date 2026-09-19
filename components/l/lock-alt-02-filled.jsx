import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1c3_upcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v1c3_upcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:lock-alt-02-filled"} {...others} />);
}

export default Component;
