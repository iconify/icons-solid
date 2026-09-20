import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo8qe8byy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oo8qe8byy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:facebook-gaming"} {...others} />);
}

export default Component;
