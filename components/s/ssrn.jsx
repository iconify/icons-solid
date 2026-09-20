import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/paf7zpi5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="paf7zpi5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:ssrn"} {...others} />);
}

export default Component;
