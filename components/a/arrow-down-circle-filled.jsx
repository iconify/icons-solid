import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/l/lbgjelwtv.css';
import '../../css/w/wnddzdb0b.css';
import '../../css/a/arnnz_b1g.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGjYFoKcqm"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="lbgjelwtv"/><path class="wnddzdb0b"/><path class="arnnz_b1g"/></g></mask></defs><circle mask="url(#SVGjYFoKcqm)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:arrow-down-circle-filled"} {...others} />);
}

export default Component;
