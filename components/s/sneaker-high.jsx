import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryu52hlwm.css';
import '../../css/p/pohkebctc.css';
import '../../css/i/ih7v8ub9f.css';
import '../../css/c/cb9w8hpme.css';
import '../../css/p/p1qcfeb7m.css';
import '../../css/n/n_s2gdjvi.css';
import '../../css/r/r0qvr2bhp.css';
import '../../css/b/b20yx1b1k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ryu52hlwm"/><path class="pohkebctc"/><path class="ih7v8ub9f"/><path class="cb9w8hpme"/><path class="p1qcfeb7m"/><path class="n_s2gdjvi"/><path class="r0qvr2bhp"/><path class="b20yx1b1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sneaker-high"} {...others} />);
}

export default Component;
