import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv7mh-bsv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tv7mh-bsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dice-1-fill"} {...others} />);
}

export default Component;
