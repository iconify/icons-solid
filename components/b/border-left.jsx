import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iejf6hdkb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iejf6hdkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:border-left"} {...others} />);
}

export default Component;
