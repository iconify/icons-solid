import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry8pu_a8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ry8pu_a8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:algolia"} {...others} />);
}

export default Component;
