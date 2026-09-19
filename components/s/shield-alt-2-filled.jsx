import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih0i_2fow.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ih0i_2fow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shield-alt-2-filled"} {...others} />);
}

export default Component;
