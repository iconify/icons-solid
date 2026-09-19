import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4spwt7oj.css';
import '../../css/u/utvngb1dp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s4spwt7oj"/><path class="utvngb1dp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:content-deleted"} {...others} />);
}

export default Component;
