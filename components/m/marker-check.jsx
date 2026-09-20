import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urm4i36ho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="urm4i36ho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:marker-check"} {...others} />);
}

export default Component;
