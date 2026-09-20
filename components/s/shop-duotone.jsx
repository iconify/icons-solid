import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b__vzjb9s.css';
import '../../css/t/tvb2i4bux.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b__vzjb9s"/><path class="tvb2i4bux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:shop-duotone"} {...others} />);
}

export default Component;
