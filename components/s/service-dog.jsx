import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxm8bbbkn.css';
import '../../css/v/ve3itfbvj.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/v/v35r2bzmm.css';
import '../../css/g/g53pon7bq.css';
import '../../css/a/atjk8mbde.css';
import '../../css/f/fk-frkbot.css';
import '../../css/f/f857cjb6p.css';
import '../../css/a/a2jqumbfr.css';
import '../../css/c/c71iqzbvd.css';
import '../../css/l/lcykp2b7q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jxm8bbbkn"/><path class="ve3itfbvj"/><g class="x8poo_bjf"><path class="v35r2bzmm"/><path class="g53pon7bq"/><g class="atjk8mbde"><path class="fk-frkbot"/><path class="f857cjb6p"/><path class="a2jqumbfr"/></g></g><path class="c71iqzbvd"/><path class="lcykp2b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:service-dog"} {...others} />);
}

export default Component;
