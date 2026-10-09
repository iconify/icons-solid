import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgtjrif2l.css';
import '../../css/f/fq3i4bq5e.css';
import '../../css/o/og-ht9b2j.css';
import '../../css/p/ptdxgubpt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rgtjrif2l"/><path class="fq3i4bq5e"/><path class="og-ht9b2j"/><path class="ptdxgubpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:supermarket-20"} {...others} />);
}

export default Component;
