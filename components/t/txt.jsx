import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm3dcyb6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hm3dcyb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:txt"} {...others} />);
}

export default Component;
