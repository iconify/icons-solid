import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5ennyb0i.css';
import '../../css/n/n5rw468eb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c5ennyb0i"/><path class="n5rw468eb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-down-left-square"} {...others} />);
}

export default Component;
