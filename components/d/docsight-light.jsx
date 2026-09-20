import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ziiqrebsl.css';
import '../../css/a/aflixdlah.css';
import '../../css/i/i-_adc_-g.css';
import '../../css/e/euha5s-mc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ziiqrebsl"/><path class="aflixdlah"/><path class="i-_adc_-g"/><circle class="euha5s-mc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:docsight-light"} {...others} />);
}

export default Component;
