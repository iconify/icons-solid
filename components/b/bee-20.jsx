import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac5rx7nmm.css';
import '../../css/l/lts7tcach.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ac5rx7nmm"/><path class="lts7tcach"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bee-20"} {...others} />);
}

export default Component;
