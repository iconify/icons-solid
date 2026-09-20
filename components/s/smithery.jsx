import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lenqjybbl.css';
import '../../css/s/sizgdyb9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lenqjybbl"/><path class="sizgdyb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:smithery"} {...others} />);
}

export default Component;
