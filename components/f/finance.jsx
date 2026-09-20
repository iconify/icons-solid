import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_hmpwg1c.css';
import '../../css/e/ej-f8xcot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d_hmpwg1c"/><path class="ej-f8xcot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:finance"} {...others} />);
}

export default Component;
