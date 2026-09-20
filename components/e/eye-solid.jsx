import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9bk5cbdt.css';
import '../../css/k/k2_62w1sw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v9bk5cbdt"/><path class="k2_62w1sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:eye-solid"} {...others} />);
}

export default Component;
