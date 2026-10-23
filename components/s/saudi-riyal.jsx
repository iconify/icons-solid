import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb2c95t9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gb2c95t9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:saudi-riyal"} {...others} />);
}

export default Component;
