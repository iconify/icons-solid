import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5l4uj3dn.css';
import '../../css/q/q-lo6_bbg.css';

const viewBox = {"width":28,"height":24};
const content = `<path class="i5l4uj3dn"/><path class="q-lo6_bbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:hotel-alt"} {...others} />);
}

export default Component;
