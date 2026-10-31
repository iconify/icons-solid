import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/d/dtw4ijbie.css';
import '../../css/a/aa4ssziim.css';
import '../../css/o/oirf0tucl.css';
import '../../css/c/c_72ygy0e.css';
import '../../css/c/cvfxh3beh.css';
import '../../css/u/u913-ef4s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="dtw4ijbie"/><path class="aa4ssziim"/><path class="oirf0tucl"/><path class="c_72ygy0e"/><path class="cvfxh3beh"/><path class="u913-ef4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:skate-pop"} {...others} />);
}

export default Component;
