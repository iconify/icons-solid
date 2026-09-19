import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gm7tfjhqe.css';
import '../../css/z/z78yszbru.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="gm7tfjhqe"/><path class="z78yszbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mail-edit"} {...others} />);
}

export default Component;
