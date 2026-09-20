import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imq8vsb_p.css';
import '../../css/a/aiokedbqd.css';
import '../../css/s/svdkiwb7s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="imq8vsb_p"/><path class="aiokedbqd"/><path class="svdkiwb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dseth"} {...others} />);
}

export default Component;
