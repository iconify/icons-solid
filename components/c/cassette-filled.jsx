import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lr51ahzia.css';
import '../../css/a/acqctfqtk.css';
import '../../css/a/a6gtcl42r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lr51ahzia"/><path clip-rule="evenodd" class="acqctfqtk"/><path class="a6gtcl42r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cassette-filled"} {...others} />);
}

export default Component;
