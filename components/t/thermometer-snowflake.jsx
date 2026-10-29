import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqhh4obaz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nqhh4obaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:thermometer-snowflake"} {...others} />);
}

export default Component;
