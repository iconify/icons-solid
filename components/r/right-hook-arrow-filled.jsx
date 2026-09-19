import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fr4grdbnk.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="fr4grdbnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:right-hook-arrow-filled"} {...others} />);
}

export default Component;
