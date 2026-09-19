import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q33hpgb-j.css';
import '../../css/i/i5r4e0b0g.css';
import '../../css/s/s6a_vl58s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q33hpgb-j"/><rect class="i5r4e0b0g"/><rect class="s6a_vl58s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:vertical-distribute-bottom-filled"} {...others} />);
}

export default Component;
