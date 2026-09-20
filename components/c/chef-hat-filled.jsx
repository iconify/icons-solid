import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8qxc_mtr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b8qxc_mtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chef-hat-filled"} {...others} />);
}

export default Component;
