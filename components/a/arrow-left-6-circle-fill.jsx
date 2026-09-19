import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vev3c_2kq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vev3c_2kq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-left-6-circle-fill"} {...others} />);
}

export default Component;
