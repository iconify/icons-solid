import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_yc40z5b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x_yc40z5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:currency-lira-fill"} {...others} />);
}

export default Component;
