import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzle1mbxg.css';
import '../../css/m/mzxakcc6v.css';
import '../../css/a/a0i4ueb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wzle1mbxg"/><path class="mzxakcc6v"/><path class="a0i4ueb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:instagram-square"} {...others} />);
}

export default Component;
