import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljx7t8mtz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ljx7t8mtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:victory-finger-03"} {...others} />);
}

export default Component;
