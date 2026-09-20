import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_f-8ebio.css';
import '../../css/d/dmqvb9ndz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_f-8ebio"/><path class="dmqvb9ndz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:terra-classic"} {...others} />);
}

export default Component;
