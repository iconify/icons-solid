import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/l7y3hub1d.css';
import '../../css/z/zjb977bjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="l7y3hub1d"/><path class="zjb977bjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:gender-male-female"} {...others} />);
}

export default Component;
