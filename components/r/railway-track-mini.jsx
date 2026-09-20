import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3_bsufwt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q3_bsufwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:railway-track-mini"} {...others} />);
}

export default Component;
