import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/i2d-0jaxn.css';
import '../../css/g/g06-dxb1f.css';
import '../../css/z/zuowx6bie.css';
import '../../css/n/nh0rim6dl.css';
import '../../css/l/logwjybxw.css';
import '../../css/w/waeejbcsn.css';
import '../../css/d/d47xxxpqj.css';
import '../../css/v/v74kveblf.css';
import '../../css/f/flp590p8q.css';
import '../../css/f/fpr348e2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="i2d-0jaxn wm-shadow"/><path class="g06-dxb1f"/><path class="zuowx6bie"/><path class="nh0rim6dl"/><path class="logwjybxw"/><path class="waeejbcsn"/><path class="d47xxxpqj"/><path class="v74kveblf"/><path class="flp590p8q wm-shine"/><path class="fpr348e2o wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:drill"} {...others} />);
}

export default Component;
