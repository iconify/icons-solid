import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm7p5zbug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hm7p5zbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:biohazard-filled"} {...others} />);
}

export default Component;
