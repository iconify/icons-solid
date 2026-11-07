import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq2w7o_df.css';
import '../../css/i/i742icc9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wq2w7o_df"/><path clip-rule="evenodd" class="i742icc9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:logout-3-outline"} {...others} />);
}

export default Component;
