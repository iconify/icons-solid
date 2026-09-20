import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wwe7b0qjf.css';
import '../../css/g/gkmb2bcis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wwe7b0qjf"/><path class="gkmb2bcis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smart-watch-square-heart"} {...others} />);
}

export default Component;
