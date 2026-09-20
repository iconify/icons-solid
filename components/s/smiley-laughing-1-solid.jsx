import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c28n9ra-f.css';
import '../../css/a/avmmhdxkt.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="c28n9ra-f"/><path class="avmmhdxkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:smiley-laughing-1-solid"} {...others} />);
}

export default Component;
