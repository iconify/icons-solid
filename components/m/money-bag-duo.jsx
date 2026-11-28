import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxqp-y1ap.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l62y4hg5y.css';
import '../../css/z/zyotwulsl.css';
import '../../css/f/fb-49ybaa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxqp-y1ap secondary"/><g class="dt0cm9dhy primary"><path class="l62y4hg5y"/><path class="zyotwulsl"/><path class="fb-49ybaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:money-bag-duo"} {...others} />);
}

export default Component;
