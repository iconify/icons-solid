import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcj8ggbve.css';
import '../../css/a/aynzu-bjt.css';

const viewBox = {"width":222,"height":217};
const content = `<path class="zcj8ggbve"/><path class="aynzu-bjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:justcall"} {...others} />);
}

export default Component;
