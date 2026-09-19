import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3d37nbly.css';
import '../../css/z/z8ae276bi.css';
import '../../css/u/uijv915oe.css';
import '../../css/g/gbpsfv88b.css';
import '../../css/a/adj27dbxb.css';
import '../../css/b/b7q334b5l.css';
import '../../css/p/p4xph6tad.css';
import '../../css/j/j2mm78bpv.css';
import '../../css/g/g4h35obfl.css';
import '../../css/z/za4tsnqlw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h3d37nbly"/><circle class="z8ae276bi"/><path class="uijv915oe"/><circle class="gbpsfv88b"/><path class="adj27dbxb"/><circle class="b7q334b5l"/><path class="p4xph6tad"/><path class="j2mm78bpv"/><path class="g4h35obfl"/><path class="za4tsnqlw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:crystalball"} {...others} />);
}

export default Component;
