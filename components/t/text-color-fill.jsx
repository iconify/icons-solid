import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lz4b3lhfv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lz4b3lhfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:text-color-fill"} {...others} />);
}

export default Component;
