import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns8hzw0md.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ns8hzw0md"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:phone-silent"} {...others} />);
}

export default Component;
