import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be24kjn_m.css';
import '../../css/m/mybsyle5g.css';
import '../../css/e/e60e9tbne.css';
import '../../css/g/gn332x-gl.css';
import '../../css/u/uby1kqbbu.css';
import '../../css/q/qwv8yacfk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="be24kjn_m"/><path clip-rule="evenodd" class="mybsyle5g"/><path class="e60e9tbne"/><path class="gn332x-gl"/><path class="uby1kqbbu"/><path class="qwv8yacfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-bold-duotone"} {...others} />);
}

export default Component;
