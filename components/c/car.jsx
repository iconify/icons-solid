import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivwl1-arg.css';
import '../../css/z/z7-npobbq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ivwl1-arg"/><path class="z7-npobbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:car"} {...others} />);
}

export default Component;
