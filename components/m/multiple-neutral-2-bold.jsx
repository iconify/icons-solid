import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvn7b8phk.css';
import '../../css/h/h07qv5bvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vvn7b8phk"/><path class="h07qv5bvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:multiple-neutral-2-bold"} {...others} />);
}

export default Component;
