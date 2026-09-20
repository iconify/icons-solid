import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/z8-kntgdl.css';
import '../../css/n/n7wgfethx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="z8-kntgdl"/><path class="n7wgfethx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:pencil-clipboard"} {...others} />);
}

export default Component;
