import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abt74tbzt.css';

const viewBox = {"width":354.674,"height":354.674,"left":180.5,"top":180.5};
const content = `<path class="abt74tbzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openai-dark"} {...others} />);
}

export default Component;
