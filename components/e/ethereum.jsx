import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djfh05m5o.css';
import '../../css/o/o6ao99dhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="djfh05m5o"/><path class="o6ao99dhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:ethereum"} {...others} />);
}

export default Component;
