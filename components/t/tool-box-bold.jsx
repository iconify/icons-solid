import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnluvnbpz.css';
import '../../css/s/sswzleb0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dnluvnbpz"/><path class="sswzleb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tool-box-bold"} {...others} />);
}

export default Component;
