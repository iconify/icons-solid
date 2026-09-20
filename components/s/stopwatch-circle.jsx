import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/p/p88tetbhy.css';
import '../../css/o/oaeovv8aq.css';
import '../../css/w/w84oibczi.css';
import '../../css/a/aw4bac3ch.css';
import '../../css/t/tnjkyilll.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="p88tetbhy"/><path clip-rule="evenodd" class="oaeovv8aq"/></g><path clip-rule="evenodd" class="w84oibczi"/><path clip-rule="evenodd" class="aw4bac3ch"/><path clip-rule="evenodd" class="tnjkyilll"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:stopwatch-circle"} {...others} />);
}

export default Component;
