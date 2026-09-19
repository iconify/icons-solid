import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/t9rwszbyz.css';
import '../../css/q/qekkj2y0p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="t9rwszbyz"/><path class="qekkj2y0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:format-brush"} {...others} />);
}

export default Component;
