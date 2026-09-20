import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9bd0dbhp.css';
import '../../css/s/s3i7xdp2x.css';
import '../../css/r/rcpiwk_jb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="f9bd0dbhp"/><path clip-rule="evenodd" class="s3i7xdp2x"/><path clip-rule="evenodd" class="rcpiwk_jb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:dna-flat"} {...others} />);
}

export default Component;
