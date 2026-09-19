import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h2kar04zl.css';
import '../../css/g/gwrmm3xbs.css';
import '../../css/f/ft6udiq_a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="h2kar04zl"/><path class="gwrmm3xbs"/><circle class="ft6udiq_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shaver-one"} {...others} />);
}

export default Component;
