import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akmyxebxj.css';
import '../../css/z/zf1qckbeu.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="akmyxebxj"/><path clip-rule="evenodd" class="zf1qckbeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloudpi-light"} {...others} />);
}

export default Component;
