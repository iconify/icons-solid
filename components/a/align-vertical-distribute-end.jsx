import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/koyvn77_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="koyvn77_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:align-vertical-distribute-end"} {...others} />);
}

export default Component;
