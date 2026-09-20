import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/e/edgmjlb5x.css';
import '../../css/l/ln7l5gybv.css';
import '../../css/b/b-fe3ib-k.css';
import '../../css/h/hswo1qron.css';
import '../../css/y/yugjfkbmj.css';
import '../../css/e/ezhg61u7o.css';
import '../../css/e/ee2hq_bna.css';
import '../../css/e/eeql_9pli.css';
import '../../css/a/awfmommwf.css';
import '../../css/y/yig6d8b4o.css';
import '../../css/e/ees9e4n0d.css';

const viewBox = {"width":41,"height":41,"top":-0.5};
const content = `<g class="umm606kxf"><path class="edgmjlb5x"/><path class="ln7l5gybv"/><path class="b-fe3ib-k"/><path class="hswo1qron"/><path class="yugjfkbmj"/><path class="ezhg61u7o"/><path class="ee2hq_bna"/><path class="eeql_9pli"/><path class="awfmommwf"/><path class="yig6d8b4o"/><path class="ees9e4n0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:astrology-study"} {...others} />);
}

export default Component;
