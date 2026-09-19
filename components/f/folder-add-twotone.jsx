import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxofds--v.css';
import '../../css/s/s310mjyrf.css';
import '../../css/g/ghnp_db6s.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="vxofds--v"/><path class="s310mjyrf"/><path class="ghnp_db6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:folder-add-twotone"} {...others} />);
}

export default Component;
