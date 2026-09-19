import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/g/gvwzbcc6a.css';
import '../../css/z/zu9gbnpjd.css';
import '../../css/x/xyd5npiae.css';
import '../../css/e/eu0dkrbpd.css';
import '../../css/r/rkbzjgb1v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="gvwzbcc6a"/><path class="zu9gbnpjd"/><rect class="xyd5npiae"/><path class="eu0dkrbpd"/><path class="rkbzjgb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fingernail"} {...others} />);
}

export default Component;
