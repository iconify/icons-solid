import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wa31awb9o.css';
import '../../css/j/jdjzcnbab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wa31awb9o"/><path class="jdjzcnbab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:youtube-music"} {...others} />);
}

export default Component;
