import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o2wpyhb8a.css';
import '../../css/y/yz-cuiy2v.css';
import '../../css/u/u04mg85tp.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="o2wpyhb8a"/><path clip-rule="evenodd" class="yz-cuiy2v"/><path class="u04mg85tp"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:file-circle-off"} {...others} />);
}

export default Component;
