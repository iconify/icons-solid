import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sn8w4jbap.css';
import '../../css/q/q_fvx4bhk.css';
import '../../css/w/wbd5s4b1z.css';
import '../../css/a/ab3lkccwf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwt8adeDl"><g class="ft5dv1b6b"><rect class="sn8w4jbap"/><rect class="q_fvx4bhk"/><path class="wbd5s4b1z"/><path class="ab3lkccwf"/></g></mask></defs><path mask="url(#SVGwt8adeDl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:perfume"} {...others} />);
}

export default Component;
