import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx4xbjb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zx4xbjb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:navigation-north-filled"} {...others} />);
}

export default Component;
