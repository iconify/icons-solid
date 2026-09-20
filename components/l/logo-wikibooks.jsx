import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqbjuibkw.css';
import '../../css/c/c49engbjl.css';
import '../../css/u/u0wyggb3l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yqbjuibkw"/><path class="c49engbjl"/><path class="u0wyggb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:logo-wikibooks"} {...others} />);
}

export default Component;
