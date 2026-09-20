import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmu9f6bki.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bmu9f6bki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:air-conditioning"} {...others} />);
}

export default Component;
