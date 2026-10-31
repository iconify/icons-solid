import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f01x5xj_a.css';
import '../../css/n/nevs5g1iv.css';
import '../../css/c/c82dc_b6t.css';
import '../../css/n/nq5xr2_5i.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="f01x5xj_a"/><path class="nevs5g1iv"/><path class="c82dc_b6t"/><path class="nq5xr2_5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:papua-new-guinea"} {...others} />);
}

export default Component;
