import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnxov3bbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dnxov3bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:instagram"} {...others} />);
}

export default Component;
