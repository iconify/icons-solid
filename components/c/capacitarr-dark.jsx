import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k77157k9j.css';
import '../../css/p/puppv7bdy.css';
import '../../css/u/u-yc98b4d.css';
import '../../css/j/jjjnq-ygw.css';
import '../../css/t/tnmdrdice.css';
import '../../css/y/ywpm2tb1g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k77157k9j"/><circle class="puppv7bdy"/><path class="u-yc98b4d"/><path class="jjjnq-ygw"/><path class="tnmdrdice"/><circle class="ywpm2tb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:capacitarr-dark"} {...others} />);
}

export default Component;
