import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o001ofuzg.css';
import '../../css/g/gv-7r_ppm.css';
import '../../css/p/pwrb__blp.css';
import '../../css/h/hefxuppcd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o001ofuzg"/><path class="gv-7r_ppm"/><path class="pwrb__blp"/><path class="hefxuppcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cottage-48"} {...others} />);
}

export default Component;
