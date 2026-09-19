import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxvai9vpb.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="mxvai9vpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:meetup"} {...others} />);
}

export default Component;
