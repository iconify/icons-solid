import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj1d7bwxo.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wj1d7bwxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:work"} {...others} />);
}

export default Component;
