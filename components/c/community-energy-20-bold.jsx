import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq1tynbis.css';
import '../../css/s/sq8u2euwj.css';
import '../../css/l/l6n_mmb1f.css';
import '../../css/u/u5tmx4bng.css';
import '../../css/u/uvemerbei.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dq1tynbis"/><path class="sq8u2euwj"/><path class="l6n_mmb1f"/><path class="u5tmx4bng"/><path class="uvemerbei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:community-energy-20-bold"} {...others} />);
}

export default Component;
