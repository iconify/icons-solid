import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u3uvukb0e.css';
import '../../css/o/om-7jcbvm.css';
import '../../css/b/b7youbx0e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="u3uvukb0e"/><path class="om-7jcbvm"/><path class="b7youbx0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ai-science-spark"} {...others} />);
}

export default Component;
