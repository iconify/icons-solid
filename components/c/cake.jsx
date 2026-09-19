import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/o/o7nvpq57o.css';
import '../../css/f/f30pbdbez.css';
import '../../css/o/ohyczpkjk.css';
import '../../css/w/w_fx7s3su.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="o7nvpq57o"/><path class="f30pbdbez"/><path class="ohyczpkjk"/><path class="w_fx7s3su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cake"} {...others} />);
}

export default Component;
