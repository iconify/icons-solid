import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfe-pzb2c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zfe-pzb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-diving-wearing-scuba-gear-under-water"} {...others} />);
}

export default Component;
