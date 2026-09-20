import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v282bqb2o.css';
import '../../css/t/tsn5jyb8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="v282bqb2o"/><circle class="tsn5jyb8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:photo-filter-2"} {...others} />);
}

export default Component;
