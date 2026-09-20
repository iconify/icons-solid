import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/v9e6z3bmt.css';
import '../../css/s/su18bq-dj.css';
import '../../css/x/xwzyb7zjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="v9e6z3bmt"/><path class="su18bq-dj"/><path class="xwzyb7zjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:snooze"} {...others} />);
}

export default Component;
