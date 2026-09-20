import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-18l2bbj.css';
import '../../css/g/gczt4gbij.css';
import '../../css/m/mte259yeo.css';
import '../../css/f/fze5v9_bf.css';
import '../../css/x/xjp_jyrkp.css';
import '../../css/g/g38c4dbwf.css';
import '../../css/z/zd7j5qvsj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l-18l2bbj"/><path class="gczt4gbij"/><path class="mte259yeo"/><path class="fze5v9_bf"/><path class="xjp_jyrkp"/><path class="g38c4dbwf"/><path class="zd7j5qvsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:context"} {...others} />);
}

export default Component;
