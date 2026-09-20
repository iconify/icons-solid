import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqom69dqx.css';
import '../../css/v/vonci7bij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqom69dqx"/><path class="vonci7bij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:newspaper-solid"} {...others} />);
}

export default Component;
