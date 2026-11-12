import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axfhcvc4t.css';
import '../../css/z/z1mnl9v4i.css';
import '../../css/j/junl_bcxy.css';
import '../../css/e/e6p6b3szq.css';
import '../../css/b/bj5mtz6uf.css';
import '../../css/t/t9rh3k1rg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="axfhcvc4t"/><path class="z1mnl9v4i"/><path class="junl_bcxy"/><path class="e6p6b3szq"/><path class="bj5mtz6uf"/><path class="t9rh3k1rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:musicbrainz-picard"} {...others} />);
}

export default Component;
