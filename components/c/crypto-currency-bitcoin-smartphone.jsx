import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb1nq1b4p.css';
import '../../css/i/iiw6u9-8q.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obd3cqbbo.css';
import '../../css/l/l4dwerigs.css';
import '../../css/b/bi2-7ibfw.css';
import '../../css/e/enoxakbnw.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/u/u3pakqblc.css';
import '../../css/v/v2i8w4b1r.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGYBeY5mTe" class="nb1nq1b4p"/><path id="SVG5RGFEbPI" class="iiw6u9-8q"/></defs><g class="ft5dv1b6b"><path class="obd3cqbbo"/><path class="l4dwerigs"/><path class="bi2-7ibfw"/><path class="enoxakbnw"/><use href="#SVGYBeY5mTe" class="c-zrgpb5l"/><use href="#SVG5RGFEbPI" class="c-zrgpb5l"/><use href="#SVGYBeY5mTe" class="c-zrgpb5l"/><use href="#SVG5RGFEbPI" class="c-zrgpb5l"/><path class="u3pakqblc"/><path class="v2i8w4b1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:crypto-currency-bitcoin-smartphone"} {...others} />);
}

export default Component;
