import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sv88ewnzg.css';
import '../../css/b/bfsv7cc4c.css';
import '../../css/s/sma5kmzjd.css';
import '../../css/x/xo9chq19z.css';
import '../../css/r/r419udbep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sv88ewnzg"/><path class="bfsv7cc4c"/><path class="sma5kmzjd"/><circle class="xo9chq19z"/><path class="r419udbep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-cog-linear"} {...others} />);
}

export default Component;
