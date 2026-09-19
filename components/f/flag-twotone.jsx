import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7yvrsswf.css';
import '../../css/t/t8radzbpg.css';
import '../../css/w/wmkeibccw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="k7yvrsswf"/><path class="t8radzbpg"/><path class="wmkeibccw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:flag-twotone"} {...others} />);
}

export default Component;
