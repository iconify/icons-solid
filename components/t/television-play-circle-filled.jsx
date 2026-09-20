import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/w/wiwz2_ber.css';
import '../../css/j/jcid24tzb.css';
import '../../css/z/zsoy0wsts.css';
import '../../css/k/kg9oxl0kw.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGQFVysTeC"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="wiwz2_ber"/><path class="jcid24tzb"/><path class="zsoy0wsts"/><path class="kg9oxl0kw"/></g></mask></defs><circle mask="url(#SVGQFVysTeC)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:television-play-circle-filled"} {...others} />);
}

export default Component;
