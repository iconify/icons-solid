import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2ubv2bis.css';
import '../../css/c/cbna_rb5p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h2ubv2bis"/><path class="cbna_rb5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:musicalscore"} {...others} />);
}

export default Component;
