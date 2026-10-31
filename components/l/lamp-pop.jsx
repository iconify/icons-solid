import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brt534uak.css';
import '../../css/d/d-9kzobuy.css';
import '../../css/i/ixbqt4b5m.css';
import '../../css/c/ch7px0hpb.css';
import '../../css/g/g1covpfcp.css';
import '../../css/g/g1yjumbei.css';
import '../../css/f/fp1-02bvi.css';
import '../../css/o/o8_o5ubbi.css';
import '../../css/m/m7ql32bos.css';
import '../../css/i/i_6vy2b2w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="brt534uak"/><path class="d-9kzobuy"/><path class="ixbqt4b5m"/><path class="ch7px0hpb"/><path class="g1covpfcp"/><path class="g1yjumbei"/><path class="fp1-02bvi"/><path class="o8_o5ubbi"/><path class="m7ql32bos"/><path class="i_6vy2b2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:lamp-pop"} {...others} />);
}

export default Component;
