import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aie-pdbvq.css';
import '../../css/v/vfm02vioa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aie-pdbvq"/><path class="vfm02vioa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:gameboy"} {...others} />);
}

export default Component;
