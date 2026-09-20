import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgcz3obid.css';
import '../../css/x/x2jubyb5j.css';
import '../../css/l/lw8cyybyj.css';
import '../../css/h/h146d0q7z.css';
import '../../css/n/nmytwzbfj.css';

const viewBox = {"width":1435,"height":320};
const content = `<path class="tgcz3obid"/><path class="x2jubyb5j"/><path class="lw8cyybyj"/><path class="h146d0q7z"/><path class="nmytwzbfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:tpbank"} {...others} />);
}

export default Component;
