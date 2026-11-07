import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u99antbvu.css';
import '../../css/s/sby6-kb3l.css';
import '../../css/z/z9sww47-j.css';
import '../../css/z/zreo3t4eh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u99antbvu"/><path class="sby6-kb3l"/><path clip-rule="evenodd" class="z9sww47-j"/><path clip-rule="evenodd" class="zreo3t4eh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:translation-2-outline"} {...others} />);
}

export default Component;
