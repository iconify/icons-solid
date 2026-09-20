import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im8enibwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="im8enibwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:settings-1-fill"} {...others} />);
}

export default Component;
