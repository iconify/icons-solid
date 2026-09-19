import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgbjpgbea.css';

const viewBox = {"width":18,"height":24};
const content = `<path class="fgbjpgbea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:music-note"} {...others} />);
}

export default Component;
