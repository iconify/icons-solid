import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp4irbc5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tp4irbc5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:safety-911-bold"} {...others} />);
}

export default Component;
