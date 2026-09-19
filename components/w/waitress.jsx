import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eukdqebjm.css';
import '../../css/z/zk6qtobiu.css';
import '../../css/d/djbyszdms.css';
import '../../css/o/oww53ybzw.css';
import '../../css/k/kp13hgbmn.css';
import '../../css/s/sq1dnnb8o.css';
import '../../css/z/z5clsdb5x.css';
import '../../css/g/gqs259feu.css';
import '../../css/m/mpgbpdfeo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="eukdqebjm"/><path class="zk6qtobiu"/><path class="djbyszdms"/><path class="oww53ybzw"/><path class="kp13hgbmn"/><path class="sq1dnnb8o"/><path class="z5clsdb5x"/><path class="gqs259feu"/><path class="mpgbpdfeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:waitress"} {...others} />);
}

export default Component;
