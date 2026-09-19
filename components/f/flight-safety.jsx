import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/l_fw_wbak.css';
import '../../css/b/bu-ysvb6c.css';
import '../../css/i/i2fdgqbjz.css';
import '../../css/f/ffjtjibyt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="l_fw_wbak"/><path class="bu-ysvb6c"/><path class="i2fdgqbjz"/><path class="ffjtjibyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:flight-safety"} {...others} />);
}

export default Component;
