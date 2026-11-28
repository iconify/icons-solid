import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b40_ogsqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b40_ogsqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:hard-drive-x"} {...others} />);
}

export default Component;
