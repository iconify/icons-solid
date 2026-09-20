import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7o8pkuib.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s7o8pkuib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:asteroid"} {...others} />);
}

export default Component;
