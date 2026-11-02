import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-fiq5b8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-fiq5b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:safari-fill"} {...others} />);
}

export default Component;
