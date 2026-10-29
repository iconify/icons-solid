import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vym85-brq.css';
import '../../css/a/a6vkp3z-m.css';
import '../../css/o/o3_va7_-y.css';
import '../../css/b/bzim1zgug.css';
import '../../css/i/iylvm580d.css';
import '../../css/m/mbjyhccgo.css';
import '../../css/m/mhzge1b9l.css';
import '../../css/z/zas8eqbfu.css';
import '../../css/z/ztoz7sbew.css';
import '../../css/a/a4nj3phty.css';
import '../../css/t/twsovlx6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vym85-brq wm-shadow"/><path class="a6vkp3z-m wm-a"/><path class="o3_va7_-y wm-k"/><path class="bzim1zgug wm-k"/><path class="iylvm580d wm-k"/><path class="mbjyhccgo wm-k"/><path class="mhzge1b9l wm-shine"/><path class="wm-k zas8eqbfu"/><path class="wm-a ztoz7sbew"/><path class="a4nj3phty wm-a"/><path class="twsovlx6u wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:arrow-down"} {...others} />);
}

export default Component;
