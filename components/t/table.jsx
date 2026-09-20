import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4hkjobnc.css';
import '../../css/m/moe9y6t0w.css';
import '../../css/g/g62bnqbfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4hkjobnc"/><path class="moe9y6t0w"/><path class="g62bnqbfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:table"} {...others} />);
}

export default Component;
