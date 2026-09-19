import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/eqf-k0brs.css';
import '../../css/n/nn7c872oa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="eqf-k0brs"/><path class="nn7c872oa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cursor-move-02"} {...others} />);
}

export default Component;
