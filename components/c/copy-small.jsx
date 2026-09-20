import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eamuywvkw.css';
import '../../css/s/swgf26b7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect vector-effect="non-scaling-stroke" class="eamuywvkw"/><path vector-effect="non-scaling-stroke" class="swgf26b7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:copy-small"} {...others} />);
}

export default Component;
