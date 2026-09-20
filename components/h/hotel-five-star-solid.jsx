import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c85d7-bcx.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="c85d7-bcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hotel-five-star-solid"} {...others} />);
}

export default Component;
