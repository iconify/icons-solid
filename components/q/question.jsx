import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c41qsrb5t.css';
import '../../css/l/ld54_pb1a.css';
import '../../css/a/a4lo4k5_r.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="c41qsrb5t"/><path class="ld54_pb1a"/><path class="a4lo4k5_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:question"} {...others} />);
}

export default Component;
