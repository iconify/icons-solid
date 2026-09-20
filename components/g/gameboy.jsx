import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x4a6dqb5j.css';
import '../../css/o/o2otl66de.css';
import '../../css/q/qxcikmwcv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="x4a6dqb5j"/><path class="o2otl66de"/><path class="qxcikmwcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:gameboy"} {...others} />);
}

export default Component;
