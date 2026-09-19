import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhmi6qb4a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nhmi6qb4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:drawing-compass-filled"} {...others} />);
}

export default Component;
