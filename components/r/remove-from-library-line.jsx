import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldk6ger7m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ldk6ger7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:remove-from-library-line"} {...others} />);
}

export default Component;
