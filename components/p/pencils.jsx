import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/daqewvbbp.css';
import '../../css/y/y9966v-qw.css';
import '../../css/s/sw9cvkqqi.css';
import '../../css/w/whr42acim.css';
import '../../css/l/l9xw1rbqg.css';
import '../../css/u/u73l751ny.css';
import '../../css/c/cfm--cb7p.css';
import '../../css/x/xnhvx2eoz.css';
import '../../css/g/g9jl52buv.css';
import '../../css/v/vov0ycx0l.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="daqewvbbp"/><path class="y9966v-qw"/><path class="sw9cvkqqi"/><path class="whr42acim"/><path class="l9xw1rbqg"/><path class="u73l751ny"/><path class="cfm--cb7p"/><path class="xnhvx2eoz"/><path class="g9jl52buv"/><path class="vov0ycx0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:pencils"} {...others} />);
}

export default Component;
