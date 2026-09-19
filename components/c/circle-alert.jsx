import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymujj4bpl.css';
import '../../css/q/qxpha_tbq.css';
import '../../css/f/fuhxmiogs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ymujj4bpl"/><circle class="qxpha_tbq"/><path class="fuhxmiogs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:circle-alert"} {...others} />);
}

export default Component;
