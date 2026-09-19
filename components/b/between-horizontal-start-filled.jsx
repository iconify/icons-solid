import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmg665juo.css';
import '../../css/o/odwst6b3m.css';
import '../../css/h/hb1bi3sso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qmg665juo"/><rect class="odwst6b3m"/><rect class="hb1bi3sso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:between-horizontal-start-filled"} {...others} />);
}

export default Component;
