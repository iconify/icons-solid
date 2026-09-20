import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5wgbkbzp.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="x5wgbkbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:face-neutral"} {...others} />);
}

export default Component;
