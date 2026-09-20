import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czhzwvb4m.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="czhzwvb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:import"} {...others} />);
}

export default Component;
