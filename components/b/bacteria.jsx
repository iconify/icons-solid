import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3c6gbc6d.css';
import '../../css/s/smab06bev.css';
import '../../css/y/yp9v_go7o.css';
import '../../css/f/fysm85xqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s3c6gbc6d"/><path class="smab06bev"/><path class="yp9v_go7o"/><path class="fysm85xqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bacteria"} {...others} />);
}

export default Component;
