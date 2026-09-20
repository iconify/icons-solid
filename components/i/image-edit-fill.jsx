import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/niy8yfjwx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="niy8yfjwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:image-edit-fill"} {...others} />);
}

export default Component;
