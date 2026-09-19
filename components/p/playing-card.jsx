import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3kjgwbes.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="f3kjgwbes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:playing-card"} {...others} />);
}

export default Component;
