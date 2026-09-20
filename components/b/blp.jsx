import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvilz5bul.css';
import '../../css/g/gioqhbc1k.css';
import '../../css/f/fvy7yglnw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvilz5bul"/><path class="gioqhbc1k"/><path class="fvy7yglnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:blp"} {...others} />);
}

export default Component;
