import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9hdtjbtt.css';

const viewBox = {"width":22,"height":24};
const content = `<path class="u9hdtjbtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:day-lightning"} {...others} />);
}

export default Component;
