import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/kmustyv3p.css';
import '../../css/d/ddl23w0uf.css';
import '../../css/z/z8hpmebck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="kmustyv3p"/><path class="ddl23w0uf"/><path class="z8hpmebck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:smartwatch-1"} {...others} />);
}

export default Component;
