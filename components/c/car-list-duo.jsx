import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zigw0qw9c.css';
import '../../css/a/a224_yq0a.css';
import '../../css/r/r57h--ief.css';
import '../../css/v/vinyvbcxc.css';
import '../../css/d/dkpndob-h.css';
import '../../css/i/i7o9cvbzq.css';
import '../../css/m/ml7i6ybfq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zigw0qw9c"/><path class="a224_yq0a"/><path class="r57h--ief"/><path class="vinyvbcxc"/><path clip-rule="evenodd" class="dkpndob-h"/><path class="i7o9cvbzq"/><path class="ml7i6ybfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:car-list-duo"} {...others} />);
}

export default Component;
