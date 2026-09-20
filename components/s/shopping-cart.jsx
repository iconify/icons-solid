import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj3h9ft4y.css';
import '../../css/d/d2x1331fj.css';
import '../../css/u/uii4avzkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lj3h9ft4y"/><circle class="d2x1331fj"/><circle class="uii4avzkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:shopping-cart"} {...others} />);
}

export default Component;
