import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smvh7b4ou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smvh7b4ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ferrari-ndotvdot"} {...others} />);
}

export default Component;
