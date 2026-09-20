import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thbt_3blk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="thbt_3blk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:mail-volume-fill"} {...others} />);
}

export default Component;
