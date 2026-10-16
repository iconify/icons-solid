import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgupoibyg.css';
import '../../css/k/krza2gbnk.css';
import '../../css/e/exrys5kfz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rgupoibyg"/><path class="krza2gbnk"/><path class="exrys5kfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-canopy-48"} {...others} />);
}

export default Component;
