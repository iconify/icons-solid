import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc8w2sd8p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mc8w2sd8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:unhappy-dizzy-line"} {...others} />);
}

export default Component;
