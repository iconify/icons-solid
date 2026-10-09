import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uww6hw4bm.css';
import '../../css/b/biqogzqmw.css';
import '../../css/i/i1_351y6t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uww6hw4bm"/><path class="biqogzqmw"/><path class="i1_351y6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-alpha-48"} {...others} />);
}

export default Component;
