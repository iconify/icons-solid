import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxvrc-n9x.css';
import '../../css/w/wtfir1bpe.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="fxvrc-n9x"/><path class="wtfir1bpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:globe-shield"} {...others} />);
}

export default Component;
