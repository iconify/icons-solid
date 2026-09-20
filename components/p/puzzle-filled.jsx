import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbedh9_zi.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="jbedh9_zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:puzzle-filled"} {...others} />);
}

export default Component;
