import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb9xe1bqq.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};
const content = `<path class="gb9xe1bqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:phone"} {...others} />);
}

export default Component;
