import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2du46z8a.css';
import '../../css/l/ltlw69bzm.css';
import '../../css/t/tf7t0y6bk.css';
import '../../css/c/cekfqs6vf.css';
import '../../css/f/fihon3scm.css';
import '../../css/z/zfe9u-5ub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o2du46z8a"/><path class="ltlw69bzm"/><path class="tf7t0y6bk"/><path class="cekfqs6vf"/><path class="fihon3scm"/><path class="zfe9u-5ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-ordered-outline"} {...others} />);
}

export default Component;
