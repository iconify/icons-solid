import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udtxlyb6t.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="udtxlyb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:devices-tablet"} {...others} />);
}

export default Component;
