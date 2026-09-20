import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4j5qe54f.css';
import '../../css/p/p2sv7_dap.css';
import '../../css/f/fkg8wdbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c4j5qe54f"/><path class="p2sv7_dap"/><path class="fkg8wdbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ionx"} {...others} />);
}

export default Component;
