import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae6usobhq.css';
import '../../css/v/v6zm26bls.css';
import '../../css/s/sa_3habye.css';
import '../../css/x/x3u0d6byq.css';
import '../../css/n/nft86achg.css';
import '../../css/x/xw5ihugjl.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ae6usobhq"/><path class="v6zm26bls"/><path class="sa_3habye"/><path class="x3u0d6byq"/><path class="nft86achg"/><path class="xw5ihugjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:aspire"} {...others} />);
}

export default Component;
