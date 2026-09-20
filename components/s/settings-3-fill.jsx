import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7ifmhbft.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o7ifmhbft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:settings-3-fill"} {...others} />);
}

export default Component;
