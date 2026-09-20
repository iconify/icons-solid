import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/u/uef8dzb8v.css';
import '../../css/e/eg6gwjs6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="uef8dzb8v"/><path class="eg6gwjs6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:phone-call-1"} {...others} />);
}

export default Component;
