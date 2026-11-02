import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpvnkvb1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kpvnkvb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:volume-low-fill"} {...others} />);
}

export default Component;
