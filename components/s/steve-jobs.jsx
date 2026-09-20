import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/l3vjg3yid.css';
import '../../css/q/qks8v3dcy.css';
import '../../css/i/ilj55bibp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="l3vjg3yid"/><path class="qks8v3dcy"/><path class="ilj55bibp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:steve-jobs"} {...others} />);
}

export default Component;
