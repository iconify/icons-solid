import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3jslumyd.css';
import '../../css/t/tzc9byxdu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d3jslumyd"/><path class="tzc9byxdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:bag"} {...others} />);
}

export default Component;
