import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lg6cvcmnb.css';
import '../../css/d/du0s7g5af.css';
import '../../css/h/hp7ql_mqx.css';
import '../../css/c/ceh2c5b0d.css';
import '../../css/d/dwojqqmjw.css';
import '../../css/b/bu4alobho.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="lg6cvcmnb"/><path class="du0s7g5af"/><path class="hp7ql_mqx"/><path class="ceh2c5b0d"/><path class="dwojqqmjw"/><path class="bu4alobho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:waterpolo-one"} {...others} />);
}

export default Component;
