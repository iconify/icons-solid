import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-th10mjr.css';
import '../../css/r/rndt691qq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n-th10mjr"/><path class="rndt691qq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-film-roll"} {...others} />);
}

export default Component;
