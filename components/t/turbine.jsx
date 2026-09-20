import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/totd4jbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="totd4jbbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:turbine"} {...others} />);
}

export default Component;
