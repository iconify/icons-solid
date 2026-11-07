import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4w_uybke.css';
import '../../css/d/dohz_0b7q.css';
import '../../css/x/x1lme2b8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i4w_uybke"/><path class="dohz_0b7q"/><path class="x1lme2b8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scale-bold-duotone"} {...others} />);
}

export default Component;
