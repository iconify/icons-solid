import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebxc1ccgv.css';
import '../../css/g/gwken0w2c.css';
import '../../css/s/sy_a5lx3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ebxc1ccgv"/><path clip-rule="evenodd" class="gwken0w2c"/><path clip-rule="evenodd" class="sy_a5lx3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:lifebuoy-outline"} {...others} />);
}

export default Component;
