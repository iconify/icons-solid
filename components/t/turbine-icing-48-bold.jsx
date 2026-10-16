import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohxaxlikf.css';
import '../../css/v/v9f037bmv.css';
import '../../css/t/tdmdn5b6p.css';
import '../../css/u/u8o-1zw3y.css';
import '../../css/r/r27egwo_t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ohxaxlikf"/><path class="v9f037bmv"/><path class="tdmdn5b6p"/><path class="u8o-1zw3y"/><path class="r27egwo_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:turbine-icing-48-bold"} {...others} />);
}

export default Component;
