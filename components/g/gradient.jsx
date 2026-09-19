import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r046gcc4f.css';
import '../../css/f/f7m0-ntgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b r046gcc4f"/><path class="b f7m0-ntgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:gradient"} {...others} />);
}

export default Component;
