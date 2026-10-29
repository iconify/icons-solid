import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y85ekib7x.css';
import '../../css/h/hxit_dbdx.css';
import '../../css/h/ha4s3ccoz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k y85ekib7x"/><path class="hxit_dbdx wm-s"/><path class="ha4s3ccoz wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cloud-download"} {...others} />);
}

export default Component;
