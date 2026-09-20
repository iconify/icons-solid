import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dykohpyzd.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-fgacbrs.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGliYWSbDy" class="dykohpyzd"/></defs><g class="cuyn6tgcc"><use href="#SVGliYWSbDy"/><use href="#SVGliYWSbDy"/><path class="o-fgacbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sms-notification-filled"} {...others} />);
}

export default Component;
