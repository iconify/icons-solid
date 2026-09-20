import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3k-pwbri.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="i3k-pwbri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:soft-unwrap"} {...others} />);
}

export default Component;
