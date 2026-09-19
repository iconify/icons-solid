import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp3tad87r.css';
import '../../css/h/hbgkxabbi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wp3tad87r"/><path class="hbgkxabbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cat-body-filled"} {...others} />);
}

export default Component;
