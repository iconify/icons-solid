import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udhx9jb5f.css';
import '../../css/v/vzilmrbae.css';
import '../../css/u/um7ec_bhd.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="udhx9jb5f"/><path class="vzilmrbae"/><path class="um7ec_bhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:save-twotone"} {...others} />);
}

export default Component;
