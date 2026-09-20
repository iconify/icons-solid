import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7js7wb7z.css';
import '../../css/h/hvxpjjbnu.css';
import '../../css/y/y2-y6r8-b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j7js7wb7z ouiIcon__fillSecondary"/><path class="hvxpjjbnu"/><path class="y2-y6r8-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-visualize"} {...others} />);
}

export default Component;
