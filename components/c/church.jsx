import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a9bnj9z9i.css';
import '../../css/l/lfqd9-qsa.css';
import '../../css/g/gnpj2gcot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a9bnj9z9i"/><path class="lfqd9-qsa"/><path class="gnpj2gcot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:church"} {...others} />);
}

export default Component;
