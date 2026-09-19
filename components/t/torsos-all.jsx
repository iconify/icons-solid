import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu7m2xbxv.css';
import '../../css/v/v999jcc3z.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="lu7m2xbxv"/><path class="v999jcc3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:torsos-all"} {...others} />);
}

export default Component;
