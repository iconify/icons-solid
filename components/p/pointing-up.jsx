import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/w/w9vi_0bbw.css';
import '../../css/w/w66dbmb4n.css';
import '../../css/y/yxx8ictdt.css';
import '../../css/m/mlg7_-bzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="w9vi_0bbw"/><path class="w66dbmb4n"/><path class="yxx8ictdt"/><path class="mlg7_-bzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:pointing-up"} {...others} />);
}

export default Component;
