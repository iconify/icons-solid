import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7jvsr74d.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/t/t9_1hpbui.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGlJx6pd9R" class="e7jvsr74d"/></defs><g class="ft5dv1b6b"><use href="#SVGlJx6pd9R"/><use href="#SVGlJx6pd9R" class="av3m8fbrw"/><path class="t9_1hpbui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tab"} {...others} />);
}

export default Component;
