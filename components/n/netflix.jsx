import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qiqu0vbdz.css';
import '../../css/s/sjfxabblt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qiqu0vbdz"/><path class="sjfxabblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:netflix"} {...others} />);
}

export default Component;
