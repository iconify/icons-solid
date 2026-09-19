import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ifxv5jnsx.css';
import '../../css/w/wku5yfoda.css';
import '../../css/t/tvbhmybjt.css';
import '../../css/h/hedyzjbko.css';
import '../../css/q/qrmqiuqyo.css';
import '../../css/i/iwyk2q6tz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="ifxv5jnsx"/><rect class="wku5yfoda"/><path class="tvbhmybjt"/><path class="hedyzjbko"/><path class="qrmqiuqyo"/><path class="iwyk2q6tz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:air-conditioning"} {...others} />);
}

export default Component;
