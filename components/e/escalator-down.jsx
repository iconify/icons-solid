import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/einhko8ud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="einhko8ud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:escalator-down"} {...others} />);
}

export default Component;
