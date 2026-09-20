import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8i3s3bzy.css';
import '../../css/b/bgzw1sbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m8i3s3bzy"/><path class="bgzw1sbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:id-card-fill"} {...others} />);
}

export default Component;
