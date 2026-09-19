import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7j8ofo6z.css';
import '../../css/l/lf3nfothj.css';
import '../../css/z/zp_lnpb-j.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="r7j8ofo6z"/><path class="lf3nfothj"/><path class="zp_lnpb-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:money"} {...others} />);
}

export default Component;
