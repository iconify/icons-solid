import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a_wi43-5u.css';
import '../../css/i/i4y7lm7jg.css';
import '../../css/c/co8929bxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a_wi43-5u"/><path class="i4y7lm7jg"/><path class="co8929bxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:coin-b"} {...others} />);
}

export default Component;
