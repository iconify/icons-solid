import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehuvywcsw.css';
import '../../css/k/k2om2cqop.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="ehuvywcsw"/><path class="k2om2cqop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:archive-sharp"} {...others} />);
}

export default Component;
