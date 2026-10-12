import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sozdzcb0a.css';
import '../../css/o/om5h7lb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sozdzcb0a"/><path class="om5h7lb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:chart-candlestick-filled"} {...others} />);
}

export default Component;
