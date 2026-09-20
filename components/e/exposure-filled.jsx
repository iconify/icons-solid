import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u25v2e26i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u25v2e26i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:exposure-filled"} {...others} />);
}

export default Component;
