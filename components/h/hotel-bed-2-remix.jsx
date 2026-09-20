import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sp1v9ybmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sp1v9ybmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hotel-bed-2-remix"} {...others} />);
}

export default Component;
