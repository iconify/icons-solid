import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rycq64tst.css';
import '../../css/c/c18ewnbwj.css';
import '../../css/y/yl94r0wtm.css';
import '../../css/p/priknnbhf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rycq64tst"/><path class="c18ewnbwj"/><path class="yl94r0wtm"/><path class="priknnbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:logwell"} {...others} />);
}

export default Component;
