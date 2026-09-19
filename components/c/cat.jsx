import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1sqy38ml.css';
import '../../css/u/u1u-os4ws.css';
import '../../css/b/b0fe4tbca.css';
import '../../css/f/fkadcub_o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p1sqy38ml"/><path class="u1u-os4ws"/><path class="b0fe4tbca"/><path class="fkadcub_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cat"} {...others} />);
}

export default Component;
