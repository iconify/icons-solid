import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjiz8hbrl.css';
import '../../css/e/eox5sonav.css';
import '../../css/v/v4i2ew1ke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjiz8hbrl"/><circle class="eox5sonav"/><circle class="v4i2ew1ke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:insta-duotone"} {...others} />);
}

export default Component;
