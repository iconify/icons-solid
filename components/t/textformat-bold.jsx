import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuqs0aczp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vuqs0aczp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:textformat-bold"} {...others} />);
}

export default Component;
