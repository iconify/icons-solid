import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgk9pubpc.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="lgk9pubpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:epic-closed"} {...others} />);
}

export default Component;
