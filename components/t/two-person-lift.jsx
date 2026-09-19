import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icsbmobje.css';
import '../../css/b/bweidcb3i.css';
import '../../css/f/fktdbrb-z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="icsbmobje"/><path class="bweidcb3i"/><path class="fktdbrb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:two-person-lift"} {...others} />);
}

export default Component;
