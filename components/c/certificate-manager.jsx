import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psiglkazx.css';
import '../../css/u/ua7vtoaqg.css';
import '../../css/b/baclkzhxm.css';
import '../../css/b/b3ay_7b1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="psiglkazx"><path clip-rule="evenodd" class="ua7vtoaqg"/><path clip-rule="evenodd" class="baclkzhxm"/><path class="b3ay_7b1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:certificate-manager"} {...others} />);
}

export default Component;
