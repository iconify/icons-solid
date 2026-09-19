import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rokf6mb-k.css';
import '../../css/r/r875-hb5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rokf6mb-k"/><path clip-rule="evenodd" class="r875-hb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:arrow-right-outline"} {...others} />);
}

export default Component;
