import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy6o8dbcn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dy6o8dbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:delivery-bold"} {...others} />);
}

export default Component;
