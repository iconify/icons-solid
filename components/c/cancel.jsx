import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo9--sbwm.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="jo9--sbwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:cancel"} {...others} />);
}

export default Component;
