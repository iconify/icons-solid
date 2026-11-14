import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pude0_byr.css';
import '../../css/i/il2mg-hhc.css';
import '../../css/e/el8qf1bpi.css';
import '../../css/z/zxugew8ln.css';
import '../../css/m/mak4w-ksu.css';
import '../../css/y/y3hk_w0yy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pude0_byr"/><circle class="il2mg-hhc"/><circle class="el8qf1bpi"/><circle class="zxugew8ln"/><circle class="mak4w-ksu"/><circle class="y3hk_w0yy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:plug-cee-red"} {...others} />);
}

export default Component;
