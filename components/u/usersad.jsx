import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2c_bsglq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r2c_bsglq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:usersad"} {...others} />);
}

export default Component;
