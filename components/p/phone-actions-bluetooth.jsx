import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnf772bnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fnf772bnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:phone-actions-bluetooth"} {...others} />);
}

export default Component;
