import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewf5p9bbr.css';
import '../../css/z/z_zrozxsx.css';
import '../../css/x/x3evh5ben.css';
import '../../css/d/dtlaqnd5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ewf5p9bbr"/><path class="z_zrozxsx"/><path class="x3evh5ben"/><path class="dtlaqnd5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-search-bold"} {...others} />);
}

export default Component;
