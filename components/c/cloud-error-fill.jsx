import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sw8gfzvcd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sw8gfzvcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:cloud-error-fill"} {...others} />);
}

export default Component;
