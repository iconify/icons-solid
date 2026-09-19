import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hns-9xe-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hns-9xe-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:align-text-right"} {...others} />);
}

export default Component;
