import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nepb9d4ok.css';
import '../../css/z/z8eeficjp.css';
import '../../css/m/mprk3sb_y.css';
import '../../css/i/izuuslnhd.css';
import '../../css/e/es5zw1otw.css';
import '../../css/g/g1455du9p.css';
import '../../css/j/j74mifb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nepb9d4ok wm-shadow"/><path class="z8eeficjp"/><path class="mprk3sb_y"/><path class="izuuslnhd"/><path class="es5zw1otw"/><path class="g1455du9p wm-shine"/><path class="j74mifb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:close"} {...others} />);
}

export default Component;
