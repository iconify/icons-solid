import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imbkg0n5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="imbkg0n5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:layout-horizontal-fill"} {...others} />);
}

export default Component;
