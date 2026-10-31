import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j58fo5boa.css';
import '../../css/m/may7lebmf.css';
import '../../css/x/xbikzocet.css';
import '../../css/m/migkdyh7i.css';
import '../../css/e/ebcsccciw.css';
import '../../css/z/zcn81pe0i.css';
import '../../css/d/d1q6u80lt.css';
import '../../css/t/tzcxoe52o.css';
import '../../css/k/ku26zd7_m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j58fo5boa"/><path class="may7lebmf"/><path class="xbikzocet"/><path class="migkdyh7i"/><path class="ebcsccciw"/><path class="zcn81pe0i"/><path class="d1q6u80lt"/><path clip-rule="evenodd" class="tzcxoe52o"/><path clip-rule="evenodd" class="ku26zd7_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:frightened-smiley-pop"} {...others} />);
}

export default Component;
