import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcb8d9bmw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dcb8d9bmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:paintbrush-vertical"} {...others} />);
}

export default Component;
