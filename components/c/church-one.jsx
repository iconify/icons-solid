import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/t_e-o1fbn.css';
import '../../css/w/whsmeto1s.css';
import '../../css/e/e1-raqbkl.css';
import '../../css/e/es9z6dchi.css';
import '../../css/y/yrgd-bcij.css';
import '../../css/d/dex7jlb_q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbSHSHbGm"><g class="s9cl3zbei"><path class="t_e-o1fbn"/><path class="whsmeto1s"/><path class="e1-raqbkl"/><path class="es9z6dchi"/><path class="yrgd-bcij"/><path class="dex7jlb_q"/></g></mask></defs><path mask="url(#SVGbSHSHbGm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:church-one"} {...others} />);
}

export default Component;
