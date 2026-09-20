import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/o/o7eo46bvq.css';
import '../../css/i/ily35eomz.css';
import '../../css/o/o9rww6bob.css';
import '../../css/z/z4v7yf9lp.css';
import '../../css/u/ulw343a8k.css';
import '../../css/x/x5v--_bic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="o7eo46bvq"/><path class="ily35eomz"/><path class="o9rww6bob"/><path class="z4v7yf9lp"/><path class="ulw343a8k"/><path class="x5v--_bic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:email-attachment-image"} {...others} />);
}

export default Component;
