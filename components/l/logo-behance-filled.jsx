import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2x4qxbpu.css';
import '../../css/g/gwq7723uj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k2x4qxbpu"/><path class="gwq7723uj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-behance-filled"} {...others} />);
}

export default Component;
