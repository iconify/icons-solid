import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6v9nvrha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e6v9nvrha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:flag-alt"} {...others} />);
}

export default Component;
