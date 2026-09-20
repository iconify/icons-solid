import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8eigqm8a.css';
import '../../css/c/ccy8wxb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h8eigqm8a"/><path class="ccy8wxb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:database-disable-bold"} {...others} />);
}

export default Component;
