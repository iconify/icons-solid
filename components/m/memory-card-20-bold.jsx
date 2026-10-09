import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtth2tkbn.css';
import '../../css/i/ikhqytp8z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gtth2tkbn"/><path class="ikhqytp8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:memory-card-20-bold"} {...others} />);
}

export default Component;
