import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwofws6qq.css';
import '../../css/v/vu6dscm0p.css';
import '../../css/a/acyzzjbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zwofws6qq"/><path class="vu6dscm0p"/><path class="acyzzjbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dog"} {...others} />);
}

export default Component;
