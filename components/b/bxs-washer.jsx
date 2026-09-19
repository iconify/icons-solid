import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hanj1gb4h.css';
import '../../css/e/egoxdachk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hanj1gb4h"/><path class="egoxdachk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-washer"} {...others} />);
}

export default Component;
