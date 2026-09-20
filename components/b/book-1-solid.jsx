import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dss7b2x8z.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="dss7b2x8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:book-1-solid"} {...others} />);
}

export default Component;
