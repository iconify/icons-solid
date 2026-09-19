import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnr6rb09e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnr6rb09e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:building-04"} {...others} />);
}

export default Component;
