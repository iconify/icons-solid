import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekh-ymbqu.css';
import '../../css/k/k27hiquiw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ekh-ymbqu"/><path class="k27hiquiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:duplicate-sharp"} {...others} />);
}

export default Component;
