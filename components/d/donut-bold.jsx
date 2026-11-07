import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6uklktlq.css';
import '../../css/k/kk94-14if.css';
import '../../css/x/xitnz62wd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l6uklktlq"/><path class="kk94-14if"/><path clip-rule="evenodd" class="xitnz62wd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:donut-bold"} {...others} />);
}

export default Component;
