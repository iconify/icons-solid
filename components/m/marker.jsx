import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvmu1sb1g.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="wvmu1sb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:marker"} {...others} />);
}

export default Component;
