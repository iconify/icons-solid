import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_ja66rng.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d_ja66rng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:golf-ball-bold"} {...others} />);
}

export default Component;
