import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1mft8bat.css';
import '../../css/f/fr5171a8g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="l1mft8bat"/><path class="fr5171a8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:webpack-wordmark"} {...others} />);
}

export default Component;
