import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9hxg7tyk.css';
import '../../css/j/j6cvtntwi.css';
import '../../css/d/d4jypxbqx.css';
import '../../css/a/a7yq0nb5g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a9hxg7tyk"/><path class="j6cvtntwi"/><path class="d4jypxbqx"/><path class="a7yq0nb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:postcss"} {...others} />);
}

export default Component;
