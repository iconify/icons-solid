import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jiz_soink.css';
import '../../css/i/iikk0lbuj.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="jiz_soink"/><path class="iikk0lbuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:railway-light"} {...others} />);
}

export default Component;
