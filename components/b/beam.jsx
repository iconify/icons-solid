import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp29u2ycf.css';
import '../../css/c/ctrc2_lfv.css';
import '../../css/t/tt80nldiy.css';
import '../../css/r/rzq2cgb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lp29u2ycf"/><path class="ctrc2_lfv"/><path class="tt80nldiy"/><path class="rzq2cgb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:beam"} {...others} />);
}

export default Component;
