import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uk1uhtb2n.css';
import '../../css/u/uf6sm2mwe.css';
import '../../css/w/wsazxob3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uk1uhtb2n"/><path class="uf6sm2mwe"/><path class="wsazxob3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-remove-01"} {...others} />);
}

export default Component;
