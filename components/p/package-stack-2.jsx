import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/b69otkwly.css';
import '../../css/t/t8rml_j2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="b69otkwly"/><path class="t8rml_j2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:package-stack-2"} {...others} />);
}

export default Component;
