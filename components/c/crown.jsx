import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq08dbbzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wq08dbbzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:crown"} {...others} />);
}

export default Component;
