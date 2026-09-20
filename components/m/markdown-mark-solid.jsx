import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz1np5bcu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cz1np5bcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:markdown-mark-solid"} {...others} />);
}

export default Component;
