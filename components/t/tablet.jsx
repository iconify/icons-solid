import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_t__4isx.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="n_t__4isx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:tablet"} {...others} />);
}

export default Component;
