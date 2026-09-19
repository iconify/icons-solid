import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/z/zsylbebuv.css';
import '../../css/u/ud13b88bd.css';
import '../../css/n/n3286ueaa.css';
import '../../css/y/yr08drbfn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="zsylbebuv"/><path class="ud13b88bd"/><path class="n3286ueaa"/><path class="yr08drbfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-left-one"} {...others} />);
}

export default Component;
