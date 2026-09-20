import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/liqo5ubke.css';
import '../../css/u/utcq9zlzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="liqo5ubke"/><path class="utcq9zlzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:highlighter"} {...others} />);
}

export default Component;
