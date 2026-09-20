import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gumdym6bg.css';
import '../../css/u/utf3i9a_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gumdym6bg"/><path class="utf3i9a_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:receipt"} {...others} />);
}

export default Component;
