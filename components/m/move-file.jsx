import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/guiy53y2j.css';
import '../../css/r/rix4lr8kf.css';
import '../../css/h/hjqyfkorm.css';
import '../../css/o/oe3i9q39k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="guiy53y2j"/><path class="rix4lr8kf"/><path class="hjqyfkorm"/><path class="oe3i9q39k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:move-file"} {...others} />);
}

export default Component;
