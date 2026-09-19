import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q92h78rqc.css';
import '../../css/a/aqufsx63j.css';
import '../../css/u/ugwb95b6a.css';
import '../../css/e/epi8ovb-q.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="q92h78rqc"/><path class="aqufsx63j"/><path class="ugwb95b6a"/><path class="epi8ovb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:tape-drive-outline-alerted"} {...others} />);
}

export default Component;
