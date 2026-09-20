import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8m1zib7f.css';
import '../../css/s/s3il34blq.css';
import '../../css/h/hiuyf2hbq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8m1zib7f"/><path class="s3il34blq"/><path class="hiuyf2hbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:common-file-stack-bold"} {...others} />);
}

export default Component;
