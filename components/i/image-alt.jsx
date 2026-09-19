import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9bscjvji.css';
import '../../css/y/ytxdcn94k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y9bscjvji"/><path class="ytxdcn94k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:image-alt"} {...others} />);
}

export default Component;
