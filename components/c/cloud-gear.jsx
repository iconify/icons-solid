import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn66k4w8p.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="rn66k4w8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:cloud-gear"} {...others} />);
}

export default Component;
