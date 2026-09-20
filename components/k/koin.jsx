import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz2cj4b0b.css';
import '../../css/m/md07ymbpc.css';
import '../../css/k/kc89csb8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pz2cj4b0b"/><path clip-rule="evenodd" class="md07ymbpc"/><path class="kc89csb8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:koin"} {...others} />);
}

export default Component;
