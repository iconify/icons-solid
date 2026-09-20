import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km2dfdcao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="km2dfdcao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:hair-dress-barber-bold"} {...others} />);
}

export default Component;
