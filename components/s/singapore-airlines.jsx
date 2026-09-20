import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3re9eibs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g3re9eibs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:singapore-airlines"} {...others} />);
}

export default Component;
