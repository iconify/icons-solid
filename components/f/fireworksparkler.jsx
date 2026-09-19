import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euyzp-gep.css';
import '../../css/b/bwmhpx5xm.css';
import '../../css/s/snvw0ebyb.css';
import '../../css/b/bkw0kv8ec.css';
import '../../css/f/fidra7bil.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="euyzp-gep"/><path class="bwmhpx5xm"/><path class="snvw0ebyb"/><path class="bkw0kv8ec"/><path class="fidra7bil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:fireworksparkler"} {...others} />);
}

export default Component;
