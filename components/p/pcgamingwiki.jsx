import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmx4n2bax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bmx4n2bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pcgamingwiki"} {...others} />);
}

export default Component;
