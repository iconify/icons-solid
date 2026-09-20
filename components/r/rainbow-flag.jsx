import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/w/w_slmdbih.css';
import '../../css/z/zigc-di9b.css';
import '../../css/p/phe74zf2u.css';
import '../../css/z/z3ingz8ss.css';
import '../../css/f/fetu3q0va.css';
import '../../css/q/q6o10henn.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wj4kgr0on"><path class="w_slmdbih"/><path class="zigc-di9b"/><path class="phe74zf2u"/><path class="z3ingz8ss"/><path class="fetu3q0va"/><path class="q6o10henn"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rainbow-flag"} {...others} />);
}

export default Component;
