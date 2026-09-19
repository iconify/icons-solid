import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v11itpgom.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/d/dasv9vo5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v11itpgom"/><path class="bwibdw4bb"/><path class="dasv9vo5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:upside-down"} {...others} />);
}

export default Component;
