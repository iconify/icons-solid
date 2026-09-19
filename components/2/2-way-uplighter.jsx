import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly-okgncv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ly-okgncv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:2-way-uplighter"} {...others} />);
}

export default Component;
