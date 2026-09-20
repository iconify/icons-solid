import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orbe74awu.css';
import '../../css/z/zz060_b7p.css';
import '../../css/s/s2jhfm7pd.css';
import '../../css/o/oisr9pb9k.css';
import '../../css/z/zt_suac9k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="orbe74awu"/><path class="zz060_b7p"/><path class="s2jhfm7pd"/><path class="oisr9pb9k"/><path class="zt_suac9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:immich-power-tools"} {...others} />);
}

export default Component;
