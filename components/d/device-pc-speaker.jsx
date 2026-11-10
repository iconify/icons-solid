import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfj-lktrr.css';
import '../../css/y/yqsxyz2pv.css';
import '../../css/a/aw4bcqbxh.css';
import '../../css/n/nq1iur8tg.css';
import '../../css/s/sjtplc5wr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yfj-lktrr"/><circle class="yqsxyz2pv"/><path class="aw4bcqbxh"/><circle class="nq1iur8tg"/><path class="sjtplc5wr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-pc-speaker"} {...others} />);
}

export default Component;
