import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/heyc8pb-z.css';
import '../../css/a/a6xuroieo.css';
import '../../css/d/d98q5ca3x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="heyc8pb-z"/><path class="a6xuroieo"/><path class="d98q5ca3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:dromedarycamel"} {...others} />);
}

export default Component;
