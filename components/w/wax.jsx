import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xjf5gjz3h.css';
import '../../css/g/gbrlv6bnu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="xjf5gjz3h"/><path class="gbrlv6bnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:wax"} {...others} />);
}

export default Component;
