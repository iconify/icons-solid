import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb_7r-iwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qb_7r-iwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:topazlabs"} {...others} />);
}

export default Component;
