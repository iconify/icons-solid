import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2k_9ab2j.css';
import '../../css/b/bfvbc4b-j.css';
import '../../css/h/hz6ugwsiz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c2k_9ab2j"/><path class="bfvbc4b-j"/><path class="hz6ugwsiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:id"} {...others} />);
}

export default Component;
