import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1si9h-km.css';
import '../../css/b/buc-_ybgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1si9h-km"/><circle class="buc-_ybgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-file-find"} {...others} />);
}

export default Component;
