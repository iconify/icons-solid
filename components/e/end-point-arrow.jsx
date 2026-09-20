import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/r4um1klfi.css';
import '../../css/u/ugkzqel7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="r4um1klfi"/><path class="ugkzqel7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:end-point-arrow"} {...others} />);
}

export default Component;
