import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpk_aciym.css';
import '../../css/a/aentn7bbl.css';
import '../../css/s/spc4sabls.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="rpk_aciym"/><path class="aentn7bbl"/><path class="spc4sabls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:web2py"} {...others} />);
}

export default Component;
