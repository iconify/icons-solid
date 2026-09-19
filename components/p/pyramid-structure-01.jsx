import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjc8aza2e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gjc8aza2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pyramid-structure-01"} {...others} />);
}

export default Component;
