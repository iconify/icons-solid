import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/yq-pnmbue.css';
import '../../css/p/pf879db8w.css';
import '../../css/x/xt7m8jbkq.css';
import '../../css/u/ueejq9bbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="yq-pnmbue"/><path class="pf879db8w"/><path class="xt7m8jbkq"/><path class="ueejq9bbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:library-big"} {...others} />);
}

export default Component;
