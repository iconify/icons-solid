import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1aovy3pz.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="g1aovy3pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:exercise"} {...others} />);
}

export default Component;
