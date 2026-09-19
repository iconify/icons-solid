import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u99giob-v.css';
import '../../css/h/hrejwrbgb.css';
import '../../css/g/gba4ubbyo.css';
import '../../css/x/xk_izwn6t.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="u99giob-v"/><rect class="hrejwrbgb"/><rect class="gba4ubbyo"/><rect class="xk_izwn6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:menu-2-fill"} {...others} />);
}

export default Component;
