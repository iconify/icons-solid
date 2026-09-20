import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g21besblw.css';
import '../../css/f/fm77d8b-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g21besblw"/><path class="fm77d8b-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vix"} {...others} />);
}

export default Component;
