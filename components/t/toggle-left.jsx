import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru0o-1bas.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="ru0o-1bas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:toggle-left"} {...others} />);
}

export default Component;
