import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp1cnh7qe.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tp1cnh7qe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:eye"} {...others} />);
}

export default Component;
