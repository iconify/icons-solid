import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vyiazc5tr.css';
import '../../css/s/svc_u102u.css';
import '../../css/k/k5ff91_ht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vyiazc5tr"/><path class="svc_u102u"/><path clip-rule="evenodd" class="k5ff91_ht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:skateboarding2"} {...others} />);
}

export default Component;
