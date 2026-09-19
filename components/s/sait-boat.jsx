import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zssdm33po.css';
import '../../css/s/s_ch1sbho.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="zssdm33po"/><path class="s_ch1sbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:sait-boat"} {...others} />);
}

export default Component;
