import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6k831oie.css';
import '../../css/r/rzbbq-lyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6k831oie"/><path class="rzbbq-lyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:memory-card-fill"} {...others} />);
}

export default Component;
