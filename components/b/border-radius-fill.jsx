import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr56_nh0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tr56_nh0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:border-radius-fill"} {...others} />);
}

export default Component;
