import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjx3ab04x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjx3ab04x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-more-vertical-fill"} {...others} />);
}

export default Component;
