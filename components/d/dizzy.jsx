import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gshe_di8n.css';
import '../../css/q/q3p31cclv.css';
import '../../css/e/ep2h7ebfd.css';
import '../../css/c/cwap3db_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gshe_di8n"/><path class="q3p31cclv"/><path class="ep2h7ebfd"/><path class="cwap3db_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:dizzy"} {...others} />);
}

export default Component;
