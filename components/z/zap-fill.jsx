import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iiy75sbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iiy75sbjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:zap-fill"} {...others} />);
}

export default Component;
