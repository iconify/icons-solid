import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rew5p0fgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rew5p0fgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:gitbook"} {...others} />);
}

export default Component;
