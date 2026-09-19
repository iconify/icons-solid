import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn0amruit.css';
import '../../css/w/w2fc8uq2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zn0amruit"/><path class="w2fc8uq2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cycling"} {...others} />);
}

export default Component;
