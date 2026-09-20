import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zmpak2byc.css';
import '../../css/a/ab6cq2jfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zmpak2byc"/><path class="ab6cq2jfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:investing-and-banking"} {...others} />);
}

export default Component;
