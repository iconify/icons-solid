import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhj-4g1kr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bhj-4g1kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-cut2-filled"} {...others} />);
}

export default Component;
