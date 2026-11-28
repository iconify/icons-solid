import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cstoc4c1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cstoc4c1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:brackets-solid"} {...others} />);
}

export default Component;
