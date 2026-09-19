import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n35mfrb1w.css';
import '../../css/c/crlngeb_w.css';
import '../../css/j/jssk5pctd.css';
import '../../css/v/voxh6ccdb.css';

const viewBox = {"width":24,"height":25};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n35mfrb1w"/><path class="crlngeb_w"/><path class="jssk5pctd"/><path class="voxh6ccdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:sort-ascending-duotone"} {...others} />);
}

export default Component;
