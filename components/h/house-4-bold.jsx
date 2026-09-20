import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_n8q2b0o.css';
import '../../css/n/nmzc2_bim.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x_n8q2b0o"/><path class="nmzc2_bim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:house-4-bold"} {...others} />);
}

export default Component;
