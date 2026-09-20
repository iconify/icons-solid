import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brno_ib1i.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="brno_ib1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:mountains-2"} {...others} />);
}

export default Component;
