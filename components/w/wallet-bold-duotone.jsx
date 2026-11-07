import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzylw2bqw.css';
import '../../css/k/kxpdd-d5x.css';
import '../../css/t/tcxp3ubtd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hzylw2bqw"/><path class="kxpdd-d5x"/><path class="tcxp3ubtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-bold-duotone"} {...others} />);
}

export default Component;
