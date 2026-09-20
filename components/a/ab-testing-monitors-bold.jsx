import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4g_eabxw.css';
import '../../css/x/xkom2ibqa.css';
import '../../css/u/ujgfrqb2y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m4g_eabxw"/><path class="xkom2ibqa"/><path class="ujgfrqb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ab-testing-monitors-bold"} {...others} />);
}

export default Component;
