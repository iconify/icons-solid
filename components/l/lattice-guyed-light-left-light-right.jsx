import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngjzxub7r.css';
import '../../css/j/j3ukne2vb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ngjzxub7r"/><path class="j3ukne2vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:lattice-guyed-light-left-light-right"} {...others} />);
}

export default Component;
