import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr_0tlnfp.css';
import '../../css/g/g31oy2bki.css';
import '../../css/s/syhxrhbzv.css';
import '../../css/d/dm03gzbnp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wr_0tlnfp"/><path class="g31oy2bki"/><path class="syhxrhbzv"/><path class="dm03gzbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-square-2-bold-duotone"} {...others} />);
}

export default Component;
