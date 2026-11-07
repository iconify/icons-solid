import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ei3g7d_fk.css';
import '../../css/v/v8fzrboci.css';
import '../../css/a/ar9hbxyso.css';
import '../../css/b/b0k5qt8xs.css';
import '../../css/y/yzlhu9uue.css';
import '../../css/u/u6ro41pwf.css';
import '../../css/h/hilzp5wle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ei3g7d_fk"/><path class="v8fzrboci"/><path class="ar9hbxyso"/><path class="b0k5qt8xs"/><path class="yzlhu9uue"/><path class="u6ro41pwf"/><path class="hilzp5wle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-3-broken"} {...others} />);
}

export default Component;
