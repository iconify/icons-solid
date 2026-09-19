import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx1_gabtl.css';
import '../../css/j/jk0rnfymy.css';
import '../../css/i/io_0phpjr.css';
import '../../css/f/fuatp5wib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vx1_gabtl"/><path class="jk0rnfymy"/><path class="io_0phpjr"/><path class="fuatp5wib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:automl"} {...others} />);
}

export default Component;
