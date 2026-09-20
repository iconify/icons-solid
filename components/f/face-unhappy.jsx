import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek3w6tbum.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ek3w6tbum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:face-unhappy"} {...others} />);
}

export default Component;
