import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4sq0zfis.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b4sq0zfis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:metro-de-paris"} {...others} />);
}

export default Component;
