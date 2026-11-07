import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2c4dccfz.css';
import '../../css/r/rm7ga8nok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d2c4dccfz"/><path class="rm7ga8nok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-3-bold"} {...others} />);
}

export default Component;
