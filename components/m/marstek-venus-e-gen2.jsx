import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey-yjdb6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ey-yjdb6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:marstek-venus-e-gen2"} {...others} />);
}

export default Component;
