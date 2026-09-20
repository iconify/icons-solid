import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pe9q2s79t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pe9q2s79t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:http-delete"} {...others} />);
}

export default Component;
