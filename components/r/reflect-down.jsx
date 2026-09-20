import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lai2u9bft.css';
import '../../css/w/wmi-1q4eu.css';
import '../../css/p/p26zql0gx.css';
import '../../css/z/zxvs2pb4r.css';
import '../../css/m/myengubsl.css';
import '../../css/t/tyjs2tynw.css';
import '../../css/y/y9ek589uh.css';
import '../../css/s/sy8786bey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lai2u9bft"/><path class="wmi-1q4eu"/><path class="p26zql0gx"/><path class="zxvs2pb4r"/><path class="myengubsl"/><path class="tyjs2tynw"/><path class="y9ek589uh"/><path class="sy8786bey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:reflect-down"} {...others} />);
}

export default Component;
