import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2101ktbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2101ktbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:egyptian-pyramids-fill"} {...others} />);
}

export default Component;
