import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1a_5235b.css';
import '../../css/i/i4leeu1eo.css';
import '../../css/o/ohgqkbxsq.css';
import '../../css/h/h1lunkbls.css';
import '../../css/e/euz94dluu.css';
import '../../css/t/t2hkpc30r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1a_5235b"/><path class="i4leeu1eo"/><path class="ohgqkbxsq"/><path class="h1lunkbls"/><path class="euz94dluu"/><path class="t2hkpc30r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-zip-bold-duotone"} {...others} />);
}

export default Component;
