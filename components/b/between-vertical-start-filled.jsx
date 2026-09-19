import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kiu_6cclx.css';
import '../../css/k/kc82gybja.css';
import '../../css/l/l2xkgdcaz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kiu_6cclx"/><rect class="kc82gybja"/><rect class="l2xkgdcaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:between-vertical-start-filled"} {...others} />);
}

export default Component;
