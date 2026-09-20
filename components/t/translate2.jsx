import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/parj1ac3o.css';
import '../../css/d/d0i3ffawj.css';
import '../../css/l/l10rdjyqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="parj1ac3o"/><path class="d0i3ffawj"/><path clip-rule="evenodd" class="l10rdjyqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:translate2"} {...others} />);
}

export default Component;
