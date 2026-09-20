import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i02e_ii7a.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="i02e_ii7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:key"} {...others} />);
}

export default Component;
