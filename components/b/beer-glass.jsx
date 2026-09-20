import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rxlvccb1a.css';
import '../../css/a/atp2gybgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rxlvccb1a"/><path class="atp2gybgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:beer-glass"} {...others} />);
}

export default Component;
