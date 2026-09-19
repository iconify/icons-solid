import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/leqoybczl.css';
import '../../css/z/zx6m1cc1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="leqoybczl"/><path class="zx6m1cc1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:error-alt"} {...others} />);
}

export default Component;
