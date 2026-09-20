import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixeqf5bxq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ixeqf5bxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:douban-logo-block"} {...others} />);
}

export default Component;
