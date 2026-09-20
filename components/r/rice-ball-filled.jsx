import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhtyav7tz.css';
import '../../css/k/kvketbp9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dhtyav7tz"/><path class="kvketbp9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:rice-ball-filled"} {...others} />);
}

export default Component;
