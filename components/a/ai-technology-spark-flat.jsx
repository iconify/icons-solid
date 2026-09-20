import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ux3ex7bqw.css';
import '../../css/c/cvkqkhbli.css';
import '../../css/u/uggzizsip.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ux3ex7bqw"/><path class="cvkqkhbli"/><path class="uggzizsip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-technology-spark-flat"} {...others} />);
}

export default Component;
