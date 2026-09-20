import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vesf7-b_g.css';
import '../../css/h/h_auobb8g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vesf7-b_g"/><path class="h_auobb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:internet-network-download"} {...others} />);
}

export default Component;
