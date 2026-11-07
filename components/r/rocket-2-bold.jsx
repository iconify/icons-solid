import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjgo2gh2x.css';
import '../../css/g/g8oi6pbgw.css';
import '../../css/b/bpg1mxbva.css';
import '../../css/f/f123j2cib.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cjgo2gh2x"/><path class="g8oi6pbgw"/><path class="bpg1mxbva"/><path clip-rule="evenodd" class="f123j2cib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-2-bold"} {...others} />);
}

export default Component;
