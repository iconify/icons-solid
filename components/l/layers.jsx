import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpn_zqbzh.css';
import '../../css/r/rcaxrbcwv.css';
import '../../css/k/k2_638ciz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gpn_zqbzh"/><path class="rcaxrbcwv"/><path class="k2_638ciz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:layers"} {...others} />);
}

export default Component;
