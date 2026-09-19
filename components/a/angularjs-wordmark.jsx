import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c70ar9dmn.css';
import '../../css/a/atuj9bc-c.css';
import '../../css/d/dxksfabqi.css';
import '../../css/f/fs26jsp2z.css';
import '../../css/r/r8xmg8f2c.css';
import '../../css/n/nwszi8bgc.css';
import '../../css/a/atwzn3f5x.css';
import '../../css/o/o-xqpkxxe.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="c70ar9dmn"/><path class="atuj9bc-c"/><path class="dxksfabqi"/><path class="fs26jsp2z"/><path class="r8xmg8f2c"/><path class="nwszi8bgc"/><path class="atwzn3f5x"/><path class="o-xqpkxxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:angularjs-wordmark"} {...others} />);
}

export default Component;
