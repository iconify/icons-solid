import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zs4pc5mry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zs4pc5mry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:layer-fill"} {...others} />);
}

export default Component;
