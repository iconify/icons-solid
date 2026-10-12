import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwesjxjko.css';
import '../../css/b/bjjq40bze.css';
import '../../css/y/yy5uv0eya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bwesjxjko"/><path class="bjjq40bze"/><path class="yy5uv0eya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ethernet-port"} {...others} />);
}

export default Component;
