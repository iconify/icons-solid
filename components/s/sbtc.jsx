import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1o8yjukt.css';
import '../../css/d/dnt094bzl.css';
import '../../css/b/bxg6g4bsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s1o8yjukt"/><path class="dnt094bzl"/><path clip-rule="evenodd" class="bxg6g4bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sbtc"} {...others} />);
}

export default Component;
