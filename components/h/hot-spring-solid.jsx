import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic2pnubyh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ic2pnubyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hot-spring-solid"} {...others} />);
}

export default Component;
