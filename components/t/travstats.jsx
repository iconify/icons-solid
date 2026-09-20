import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob9sxvbzl.css';
import '../../css/z/zfyfngbdb.css';
import '../../css/l/lnqbgixxr.css';
import '../../css/i/if99olb8w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ob9sxvbzl"/><path class="zfyfngbdb"/><path class="lnqbgixxr"/><path class="if99olb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:travstats"} {...others} />);
}

export default Component;
