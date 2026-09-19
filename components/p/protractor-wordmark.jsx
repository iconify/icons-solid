import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edrdnacqq.css';
import '../../css/z/zsxtqrb5l.css';
import '../../css/i/iprg3yp0h.css';
import '../../css/e/ekunhbcfg.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="edrdnacqq"/><path class="zsxtqrb5l"/><path class="iprg3yp0h"/><path class="ekunhbcfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:protractor-wordmark"} {...others} />);
}

export default Component;
