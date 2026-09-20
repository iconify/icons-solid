import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3no7gs5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3no7gs5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-xiaomareport-filled"} {...others} />);
}

export default Component;
