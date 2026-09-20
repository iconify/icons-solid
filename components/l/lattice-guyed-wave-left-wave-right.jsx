import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngjzxub7r.css';
import '../../css/u/ua61w2bin.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ngjzxub7r"/><path class="ua61w2bin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:lattice-guyed-wave-left-wave-right"} {...others} />);
}

export default Component;
