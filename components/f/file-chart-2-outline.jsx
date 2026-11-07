import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqrqnjc0w.css';
import '../../css/u/uut2i8dps.css';
import '../../css/a/afgcqxbbk.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fqrqnjc0w"/><path class="uut2i8dps"/><path class="afgcqxbbk"/><path clip-rule="evenodd" class="d25mwn3tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-chart-2-outline"} {...others} />);
}

export default Component;
