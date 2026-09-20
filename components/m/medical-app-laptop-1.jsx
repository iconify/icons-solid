import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgk9nmbel.css';
import '../../css/o/o9uhx5bxi.css';
import '../../css/i/ii3io_b_u.css';
import '../../css/t/t4i2zs-6g.css';
import '../../css/m/m-r43mcvd.css';
import '../../css/c/cqulk1etb.css';
import '../../css/u/u4qputb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xgk9nmbel"/><path class="o9uhx5bxi"/><path class="ii3io_b_u"/><path class="t4i2zs-6g"/><path class="m-r43mcvd"/><path class="cqulk1etb"/><path class="u4qputb5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:medical-app-laptop-1"} {...others} />);
}

export default Component;
