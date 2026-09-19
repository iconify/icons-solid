import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um5hbmb3j.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="um5hbmb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:mail-fill"} {...others} />);
}

export default Component;
