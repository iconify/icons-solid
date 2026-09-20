import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/c/cqba57b3z.css';
import '../../css/p/pnhr2obpf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path clip-rule="evenodd" class="cqba57b3z"/><path class="pnhr2obpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:apple"} {...others} />);
}

export default Component;
