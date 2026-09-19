import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2v5x-bzn.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="u2v5x-bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:radio-button-small"} {...others} />);
}

export default Component;
