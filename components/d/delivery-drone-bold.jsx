import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uim7w5btd.css';
import '../../css/q/qvdt6db7f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uim7w5btd"/><path class="qvdt6db7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:delivery-drone-bold"} {...others} />);
}

export default Component;
