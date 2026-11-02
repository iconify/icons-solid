import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk_85gb6j.css';
import '../../css/c/czwlbs76f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sk_85gb6j"/><path class="czwlbs76f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:loading-3-fill"} {...others} />);
}

export default Component;
