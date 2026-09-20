import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryu52hlwm.css';
import '../../css/p/pohkebctc.css';
import '../../css/l/lnsupvb2j.css';
import '../../css/c/cb9w8hpme.css';
import '../../css/p/p1qcfeb7m.css';
import '../../css/a/axs2kmbwx.css';
import '../../css/o/o2rmclbfm.css';
import '../../css/b/b20yx1b1k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ryu52hlwm"/><path class="pohkebctc"/><path class="lnsupvb2j"/><path class="cb9w8hpme"/><path class="p1qcfeb7m"/><path class="axs2kmbwx"/><path class="o2rmclbfm"/><path class="b20yx1b1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sneaker"} {...others} />);
}

export default Component;
