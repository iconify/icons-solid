import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo5ufz-lm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jo5ufz-lm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:layers"} {...others} />);
}

export default Component;
