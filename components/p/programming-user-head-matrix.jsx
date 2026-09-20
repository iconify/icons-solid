import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyolmzewg.css';
import '../../css/p/pl82gjb6q.css';
import '../../css/s/s3d6a-b2t.css';
import '../../css/r/rnsb_0bsv.css';
import '../../css/s/sn6suds-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kyolmzewg"/><path class="pl82gjb6q"/><path class="s3d6a-b2t"/><path class="rnsb_0bsv"/><path class="sn6suds-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:programming-user-head-matrix"} {...others} />);
}

export default Component;
