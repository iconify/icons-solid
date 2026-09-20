import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mopfn8bqt.css';
import '../../css/u/un9c917fh.css';
import '../../css/w/w5i9gh2gf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mopfn8bqt"/><path class="un9c917fh"/><path class="w5i9gh2gf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-bold-duotone"} {...others} />);
}

export default Component;
