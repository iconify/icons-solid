import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bls-2lq9o.css';
import '../../css/p/p5wivnb6o.css';
import '../../css/c/ces-s2pfe.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="bls-2lq9o"/><rect class="p5wivnb6o"/><path class="ces-s2pfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:card-view-tiles-filled"} {...others} />);
}

export default Component;
