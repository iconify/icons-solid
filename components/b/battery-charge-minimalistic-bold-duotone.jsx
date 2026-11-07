import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eooclpefv.css';
import '../../css/x/x71vmdblh.css';
import '../../css/e/ehfbimt9c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eooclpefv"/><path class="x71vmdblh"/><path class="ehfbimt9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-charge-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
