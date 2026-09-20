import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2_ycobki.css';
import '../../css/g/gtechvnvb.css';
import '../../css/n/nmt5nmbvs.css';
import '../../css/y/y6k7ypb_p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y2_ycobki"/><path class="gtechvnvb"/><path class="nmt5nmbvs"/><path class="y6k7ypb_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-fuck-middle-finger"} {...others} />);
}

export default Component;
