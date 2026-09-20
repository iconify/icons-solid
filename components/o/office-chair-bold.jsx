import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0p9_yb_k.css';
import '../../css/b/bu9ktetle.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k0p9_yb_k"/><path class="bu9ktetle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-chair-bold"} {...others} />);
}

export default Component;
