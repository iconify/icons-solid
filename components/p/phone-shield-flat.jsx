import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hzq80o3qy.css';
import '../../css/r/r97-bnbcb.css';
import '../../css/z/zfyjy16gh.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="hzq80o3qy"/><path class="r97-bnbcb"/><path class="zfyjy16gh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:phone-shield-flat"} {...others} />);
}

export default Component;
