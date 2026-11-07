import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s__fhe3nj.css';
import '../../css/t/tr0cf2bpt.css';
import '../../css/t/t-s7oqbld.css';
import '../../css/a/akyufm1qb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s__fhe3nj"/><path class="tr0cf2bpt"/><path class="t-s7oqbld"/><path class="akyufm1qb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pipette-bold-duotone"} {...others} />);
}

export default Component;
