import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s3-m1_bzy.css';
import '../../css/x/xulwrkedr.css';
import '../../css/b/bxkhl1-0w.css';
import '../../css/w/w_yq6qb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s3-m1_bzy"/><path class="xulwrkedr"/><path class="bxkhl1-0w"/><path class="w_yq6qb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:saving-safe"} {...others} />);
}

export default Component;
