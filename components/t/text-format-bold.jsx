import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkqq6fire.css';
import '../../css/u/ulrix6h0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lkqq6fire"/><path class="ulrix6h0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-format-bold"} {...others} />);
}

export default Component;
