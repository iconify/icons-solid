import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v7o7qo6ht.css';
import '../../css/n/nhp4w7b6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v7o7qo6ht"/><path class="nhp4w7b6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:redo-action"} {...others} />);
}

export default Component;
