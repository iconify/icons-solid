import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqp835bas.css';
import '../../css/z/zz538uboq.css';
import '../../css/a/a_rdqgb1f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rqp835bas"/><path class="zz538uboq"/><path class="a_rdqgb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kite-20-bold"} {...others} />);
}

export default Component;
