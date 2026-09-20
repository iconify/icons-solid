import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txo1x1bai.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="txo1x1bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chevron-right"} {...others} />);
}

export default Component;
