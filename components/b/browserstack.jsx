import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ioyn42bjj.css';
import '../../css/g/g00-jfi-e.css';
import '../../css/w/w_i-pk3zl.css';
import '../../css/t/t_hmnnblg.css';
import '../../css/z/zv4mjlbgg.css';
import '../../css/i/il-1-3qiu.css';
import '../../css/k/kkknlsbaa.css';
import '../../css/c/cb24lsbio.css';
import '../../css/b/bl0unx-or.css';
import '../../css/y/y4xagog8i.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ioyn42bjj"/><path class="g00-jfi-e"/><path class="w_i-pk3zl"/><path class="t_hmnnblg"/><path class="zv4mjlbgg"/><path class="il-1-3qiu"/><path class="kkknlsbaa"/><path class="cb24lsbio"/><path class="bl0unx-or"/><path class="y4xagog8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:browserstack"} {...others} />);
}

export default Component;
