import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja2z0ptxd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ja2z0ptxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pound-sterling-fill"} {...others} />);
}

export default Component;
