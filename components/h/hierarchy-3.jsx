import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/llsi3o73f.css';
import '../../css/f/ftofmvbrx.css';
import '../../css/s/sox2b4bin.css';
import '../../css/f/f1166832i.css';
import '../../css/l/lee9s-j6h.css';
import '../../css/f/f-2dmnbyp.css';
import '../../css/u/uzcxhcb3b.css';
import '../../css/h/hzn-vqbns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="llsi3o73f"/><path class="ftofmvbrx"/><path class="sox2b4bin"/><path class="f1166832i"/><path class="lee9s-j6h"/><path class="f-2dmnbyp"/><path class="uzcxhcb3b"/><path class="hzn-vqbns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:hierarchy-3"} {...others} />);
}

export default Component;
