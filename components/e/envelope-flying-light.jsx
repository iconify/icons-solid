import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6nvqp9jz.css';
import '../../css/t/tynapsbmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u6nvqp9jz"/><path class="tynapsbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:envelope-flying-light"} {...others} />);
}

export default Component;
