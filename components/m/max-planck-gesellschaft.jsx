import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4xp6obcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i4xp6obcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:max-planck-gesellschaft"} {...others} />);
}

export default Component;
