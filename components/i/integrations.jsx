import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hexpxuw8g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hexpxuw8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:integrations"} {...others} />);
}

export default Component;
