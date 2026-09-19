import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_nf9ib3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_nf9ib3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:align-left"} {...others} />);
}

export default Component;
