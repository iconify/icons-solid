import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg44mlb9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xg44mlb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:coffee-bean"} {...others} />);
}

export default Component;
