import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-go91ypk.css';
import '../../css/m/mkwx26bok.css';
import '../../css/f/fv05gfbud.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n-go91ypk"/><path class="mkwx26bok"/><path class="fv05gfbud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:webhook"} {...others} />);
}

export default Component;
