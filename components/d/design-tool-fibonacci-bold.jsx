import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr5y6mbwg.css';
import '../../css/x/x6bcvoimv.css';
import '../../css/a/a49kqqbom.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pr5y6mbwg"/><path class="x6bcvoimv"/><path class="a49kqqbom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:design-tool-fibonacci-bold"} {...others} />);
}

export default Component;
