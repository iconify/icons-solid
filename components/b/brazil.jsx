import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tay4xd-8e.css';
import '../../css/b/bpfzmzkzu.css';
import '../../css/u/utxtcsmff.css';
import '../../css/p/pz370hbva.css';
import '../../css/a/adhy-nbnh.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tay4xd-8e"/><path class="bpfzmzkzu"/><path class="utxtcsmff"/><path class="pz370hbva"/><path class="adhy-nbnh"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:brazil"} {...others} />);
}

export default Component;
