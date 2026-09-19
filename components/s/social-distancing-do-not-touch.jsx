import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c2l4so__a.css';
import '../../css/b/bizmaac4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c2l4so__a"/><path class="bizmaac4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-do-not-touch"} {...others} />);
}

export default Component;
