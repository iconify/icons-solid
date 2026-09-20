import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8cem1bzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8cem1bzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-in-up-right-dashed-panel-fill"} {...others} />);
}

export default Component;
