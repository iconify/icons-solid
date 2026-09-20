import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn9uzzb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rn9uzzb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hearing-deaf-1-remix"} {...others} />);
}

export default Component;
