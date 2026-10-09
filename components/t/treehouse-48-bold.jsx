import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqbe_cc_j.css';
import '../../css/c/cot5v44oq.css';
import '../../css/b/b00qdxb4c.css';
import '../../css/z/zwi9klbqr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jqbe_cc_j"/><path class="cot5v44oq"/><path class="b00qdxb4c"/><path class="zwi9klbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:treehouse-48-bold"} {...others} />);
}

export default Component;
