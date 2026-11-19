import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwt341hlt.css';
import '../../css/r/r1t_886tx.css';
import '../../css/q/qizi-c8yi.css';
import '../../css/b/bs9mhcbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bwt341hlt"/><circle class="r1t_886tx"/><path class="qizi-c8yi"/><path class="bs9mhcbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-mail"} {...others} />);
}

export default Component;
