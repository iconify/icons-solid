import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr_7g48pa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tr_7g48pa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:keyboard-open"} {...others} />);
}

export default Component;
