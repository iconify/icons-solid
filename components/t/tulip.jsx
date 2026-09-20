import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw6y4-jlg.css';
import '../../css/m/m9biyvb8g.css';
import '../../css/z/zrrxbeb2v.css';
import '../../css/t/tm0lw447f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rw6y4-jlg"/><path class="m9biyvb8g"/><path class="zrrxbeb2v"/><path class="tm0lw447f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:tulip"} {...others} />);
}

export default Component;
