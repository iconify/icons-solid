import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muu8gqd7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="muu8gqd7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:insert-invitation"} {...others} />);
}

export default Component;
