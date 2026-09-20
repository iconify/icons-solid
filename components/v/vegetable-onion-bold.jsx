import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2bvsbcom.css';
import '../../css/l/l7cx49rxz.css';
import '../../css/d/dif39_b1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f2bvsbcom"/><path class="l7cx49rxz"/><path class="dif39_b1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:vegetable-onion-bold"} {...others} />);
}

export default Component;
