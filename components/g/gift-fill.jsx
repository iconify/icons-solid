import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/katho303g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="katho303g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:gift-fill"} {...others} />);
}

export default Component;
