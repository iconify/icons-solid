import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9dl3bb8m.css';
import '../../css/t/tm0ea5ulw.css';
import '../../css/f/f2oxte4gf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z9dl3bb8m"/><path class="tm0ea5ulw"/><path class="f2oxte4gf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:duplicate"} {...others} />);
}

export default Component;
