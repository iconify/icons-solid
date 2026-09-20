import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j77rxjbqw.css';
import '../../css/n/n_ffh9buk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j77rxjbqw"/><path class="n_ffh9buk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dusk"} {...others} />);
}

export default Component;
