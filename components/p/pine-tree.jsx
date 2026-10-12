import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpagcnklg.css';
import '../../css/w/w2pia3bjx.css';
import '../../css/s/shqvfh8po.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gpagcnklg"/><path class="w2pia3bjx"/><path class="shqvfh8po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pine-tree"} {...others} />);
}

export default Component;
