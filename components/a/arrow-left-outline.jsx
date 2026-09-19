import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z38kx1b1d.css';
import '../../css/e/ew4cdbbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z38kx1b1d"/><path clip-rule="evenodd" class="ew4cdbbdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:arrow-left-outline"} {...others} />);
}

export default Component;
