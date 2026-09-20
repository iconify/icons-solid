import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snp287xku.css';
import '../../css/t/t2z-5sb_c.css';
import '../../css/w/wx5g56q5c.css';
import '../../css/e/epxunkbcs.css';
import '../../css/n/n2dwat_5w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="snp287xku"/><path class="t2z-5sb_c"/><path class="wx5g56q5c"/><path class="epxunkbcs"/><path class="n2dwat_5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:snowflake"} {...others} />);
}

export default Component;
