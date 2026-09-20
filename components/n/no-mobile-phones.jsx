import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snp287xku.css';
import '../../css/b/bi7bdcbkb.css';
import '../../css/u/uf2rebcmc.css';
import '../../css/t/t4meijnxp.css';
import '../../css/y/y8lfcxb4u.css';
import '../../css/q/qat-2x6lg.css';
import '../../css/k/k4drvwxjh.css';
import '../../css/k/khz1lm38f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="snp287xku"/><path class="bi7bdcbkb"/><path class="uf2rebcmc"/><path class="t4meijnxp"/><path class="y8lfcxb4u"/><path class="qat-2x6lg"/><path class="k4drvwxjh"/><path class="khz1lm38f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:no-mobile-phones"} {...others} />);
}

export default Component;
