import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdf_ixb2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdf_ixb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:organization-chart"} {...others} />);
}

export default Component;
