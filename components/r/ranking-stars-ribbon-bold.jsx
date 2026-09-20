import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1qw3obyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1qw3obyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ranking-stars-ribbon-bold"} {...others} />);
}

export default Component;
