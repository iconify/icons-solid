import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u7yp8bc2a.css';
import '../../css/c/clk8azu1e.css';
import '../../css/a/a9q--rvvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u7yp8bc2a"/><path class="clk8azu1e"/><path class="a9q--rvvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:credit-card-dollar"} {...others} />);
}

export default Component;
