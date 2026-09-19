import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/b/bkvyh8bzx.css';
import '../../css/n/nn_a_ub1w.css';
import '../../css/o/ob03iy0nt.css';
import '../../css/s/suq-x345g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="bkvyh8bzx"/><path class="nn_a_ub1w"/><path class="ob03iy0nt"/><path class="suq-x345g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:desk-lamp-one"} {...others} />);
}

export default Component;
