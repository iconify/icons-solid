import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbmt5i9bn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nbmt5i9bn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:homeadvisor"} {...others} />);
}

export default Component;
