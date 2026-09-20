import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytl2035my.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ytl2035my"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:focus-points-solid"} {...others} />);
}

export default Component;
