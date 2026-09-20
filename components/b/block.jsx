import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ellkj-bdc.css';
import '../../css/q/qhrkrwb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ellkj-bdc"/><path class="qhrkrwb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:block"} {...others} />);
}

export default Component;
