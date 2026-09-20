import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dktm0rvez.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dktm0rvez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:zodiac-pisces"} {...others} />);
}

export default Component;
