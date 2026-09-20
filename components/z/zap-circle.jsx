import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zwev9ibod.css';
import '../../css/i/il8nojxoe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zwev9ibod"/><path class="il8nojxoe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:zap-circle"} {...others} />);
}

export default Component;
