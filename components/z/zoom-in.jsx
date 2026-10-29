import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgnd9bw0t.css';
import '../../css/b/bh1hcdbms.css';
import '../../css/g/g2k-h2zlv.css';
import '../../css/a/ayyrcysbb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mgnd9bw0t wm-a"/><path class="bh1hcdbms wm-k"/><path class="g2k-h2zlv wm-a"/><path class="ayyrcysbb wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:zoom-in"} {...others} />);
}

export default Component;
