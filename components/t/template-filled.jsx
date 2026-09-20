import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvgxz_baw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvgxz_baw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:template-filled"} {...others} />);
}

export default Component;
